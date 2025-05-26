import express from 'express';
import router from './routes/routes.js';
import DBConnection from './database/db.js';
import cors from 'cors';
const app = express();
// Enable Cross-Origin Resource Sharing for all routes
app.use(cors());
app.get('/',(req,res)=>{
res.send("Hello World");
});
DBConnection();
// Use router for all routes
app.use('/', router);
app.listen(8000, ()=>{
console.log("Server is running on port 8000");
});

//MVC->Model View Controller
//Model - Data
//View- UI / Routes
//Controller - logic


// //user ->api.js->(client)->server.js->routes->routes.js->controller->function->logic