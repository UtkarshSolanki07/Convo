import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { ENV } from "../lib/env.js";

export const socketAuthMiddleware=async(socket,next)=>{
    try {
        const token=socket.handshake.headers.cookie?.split("; ").find((row)=>row.startsWith("jwt="))?.split("=")[1];
        if(!token){
            console.log("Socket Connection Rejected:No Token Provided");
            return next(new Error("Authentication error"));
        }
        const decoded=jwt.verify(token,ENV.JWT_SECRET);
        if(!decoded){
          console.log("Socket Connection Rejected:Invalid Token",error.message);  
          return next(new Error("Authentication error"));
        }
        const user=await User.findById(decoded.userId).select("-password");
        if(!user){
          console.log("Socket Connection Rejected:User Not Found",error.message);  
          return next(new Error("User not found"));
        }

        socket.user=user;
        socket.userId=user._id.toString();
        console.log(`Socket Connection Accepted:User Authenticated ${user.fullName} (${user._id})`);
        next();
    }catch (error) {
        console.log("Socket Connection Rejected:Invalid Token",error.message);
        return next(error);
    }
}
