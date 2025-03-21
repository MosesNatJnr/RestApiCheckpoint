import dotenv from "dotenv"
import express from "express"
import { connectDB } from "./db/db.js"
dotenv.config({path:"./config/.env"})
const port = process.env.PORT || 3000
const app = express()
connectDB()
app.listen(port,()=>{
    console.log("Server is Running Live"); 
});
