
import File from '../models/file.js';
import dotenv from 'dotenv';

dotenv.config();
/**
 * Handles file upload requests
 * Creates a new file record in the database and returns a download link
 */
export const uploadImage = async (req, res) => {
    
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname
   
}

 try {
        // Save file metadata to database
        const file = await File.create(fileObj);
        // Return download link with file ID
        res.status(200).json({ 
            path: `http://localhost:${process.env.PORT}/file/${file._id}`,
            message: 'File uploaded successfully'
        });
        
    } catch (error) {
        console.error("Error in uploadingimage",error.message);
        res.status(500).json({
       success:false,
       message:error.message
    });
    }
}
/**
 * Handles file download requests
 * Increments download count and serves the file
 */
export const getImage = async (req, res) => {
    try {   
        // Find file by ID from URL parameters
        const fileId=req.params.fileId;
        const file = await File.findById(fileId);
        
        // Check if file exists
        if (!file) {
            return res.status(404).json({ error: 'File not found' });
        }

        // Increment download counter
        file.downloadCount++;
        await file.save();

        // Send file to client for download
        res.download(file.path, file.name);
    } catch (error) {
       console.error("Error in getimage",error.message);
       res.status(500).json({
        success:false,
        message:error.message
       });
    }
}
