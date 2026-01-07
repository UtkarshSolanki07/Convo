import { create } from "zustand";

export const useAuthStore = create((set,get)=>({
    authUser: {name:"Utkarsh",_id:"123",age:20},
    isLoggedIn: false,
    isLoading: false,
    
    login: ()=>{
        console.log("The user is logged in");
        set({isLoggedIn:true,isLoading:true})
    },
}));
