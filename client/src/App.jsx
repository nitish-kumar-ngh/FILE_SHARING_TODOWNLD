import {useState,useEffect,useRef} from 'react'// using hooks passing the refrences 
import './App.css'
import { uploadFile } from './service/api';
function App() {

 // State for the selected file
const [file, setFile] = useState("");
const [result, setResult] = useState('');

 useEffect(() => {
    const getImage = async () => {
      if (file) {
       
          // Create FormData object to send file to server
          const data = new FormData();
          data.append("name", file.name);
          data.append("file", file);

          // Upload file and get response
          const response = await uploadFile(data);//frontend send the data to the backend
          setResult(response.path);
        
      }
    }
    getImage();
  }, [file]);






 // Reference to the hidden file input element
const fileInputRef = useRef();


const onUploadClick = () => {
fileInputRef.current.click();
}

  return (
    <>
       <div className='main-wrapper' style={{ backgroundImage: `url('https://images.pexels.com/photos/23547/pexels-photo.jpg')` }}>
      <div className='container'>
        <div className='wrapper'>
          <h1>AlgoU File Sharing!</h1>
          <p>Upload a file to generate a download link.</p>
           
           <button onClick={()=>onUploadClick()}>Upload</button>
            {/* 🔴 Input ko hide kar diya */}
            <input
           type="file"
           ref={fileInputRef}
           style={{ display: 'none' }} onChange={(e)=>setFile(e.target.files[0])}
          />
          <a href ={result} target ="_blank">{result}</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
