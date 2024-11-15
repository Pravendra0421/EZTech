import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./connectDB.js";
import contact from "./routes/contact.js";
const app = express();
dotenv.config();
connectDB();
const PORT = process.env.PORT || 1000;
app.use(cors());
app.use(express.json());
app.use("/api/v1",contact);
app.listen(PORT,()=>{
    console.log(`server listen at port ${PORT}`);
})