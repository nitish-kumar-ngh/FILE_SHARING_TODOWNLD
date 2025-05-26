# 📦 FILE_SHARING_TODOWNLD

A modern MERN stack file-sharing web app with real-time download tracking, secure uploads, and a sleek React + Vite frontend.

---

## ✨ Features

📁 **File Upload**: Upload files up to 10MB  
🔗 **Share Links**: Get instant shareable download links  
📊 **Download Tracking**: Track how many times files are downloaded  
🎨 **Modern UI**: Clean and responsive user interface  
🔒 **Secure**: File validation and error handling with proper status codes  

---

## 🛠️ Tech Stack

### 🧩 Frontend
- **React 18** with **Vite**
- **Axios** for HTTP requests
- **CSS3** for styling

### ⚙️ Backend
- **Node.js** with **Express**
- **MongoDB** with **Mongoose**
- **Multer** for file uploads
- **dotenv** for environment variables
- **CORS** for cross-origin support

---

## ✅ Prerequisites

Ensure the following are installed:

- **Node.js** (v14 or above)  
- **MongoDB** (local installation or MongoDB Atlas)  
- **npm** or **yarn**

---  

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/FILE_SHARING_TODOWNLD.git
cd FILE_SHARING_TODOWNLD
```
### 2. Backend Setup
```bash
cd server
npm install
cp .env.example .env
# Edit .env file:
# MONGODB_URL=mongodb://localhost:5177/file-sharing
# PORT=8000
```
### 3. Frontend Setup
```bash
# Navigate to client directory (from root)
cd client

# Install dependencies
npm install
```
### 4.Create uploads directory
```bash
# From server directory
mkdir uploads
```
### Running the Application
# Start the Backend Server
```bash
# From server directory
cd server
npm start
The server will start on http://localhost:8000
```

### Start the Frontend Application
```bash
# From client directory (in a new terminal)
cd client
npm run dev
The React + Vite app will start on: http://localhost:5176
```
### project structure
```bash
/FILE_SHARING_TODOWNLD
├── client/                 # React frontend
│   ├── src/
│   │   ├── service/       # API service functions
│   │   ├── App.js         # Main React component
│   │   └── App.css        # Styling
│   └── package.json
├── server/                # Node.js backend
│   ├── controller/        # Route controllers
│   ├── database/         # Database connection
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   ├── utils/            # Utility functions
│   ├── uploads/          # File storage directory
│   ├── .env.example      # Environment variables template
│   └── package.json
└── README.md
```

