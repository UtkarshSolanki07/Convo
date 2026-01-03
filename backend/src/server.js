import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.routes.js";
import path from "path";
import {connectDB} from "./lib/db.js";
import { ENV } from "./lib/env.js";

const PORT = ENV.PORT;

const app = express();
const __dirname = path.resolve();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

//Deployment
if(ENV.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));
    
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
    })

}

app.listen(PORT, () =>{ 
    console.log("Server is running on port: " + PORT)
    connectDB();
});
