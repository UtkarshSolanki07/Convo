import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import { X } from "lucide-react";
import { useEffect } from "react";

/**
 * Render a chat header showing the selected user's avatar, name, online status, and a close button.
 *
 * The component reads the selected user and setter from the chat store and online users from the auth store.
 * Pressing Escape or clicking the close button clears the selected user. The avatar falls back to "/avatar.png"
 * if no profile picture is available or if the image fails to load.
 * 
 * @returns {JSX.Element} The header UI for the active chat user.
 */
function ChatHeader() {
    const {selectedUser,setSelectedUser}=useChatStore();
    const {onlineUsers}=useAuthStore();
    const isOnline=onlineUsers.includes(selectedUser._id); 
    useEffect(()=>{
        const handleEscKey=(event)=>{
            if(event.key==="Escape") setSelectedUser(null);
        }
        window.addEventListener("keydown",handleEscKey);
        return()=>window.removeEventListener("keydown",handleEscKey);
    },[setSelectedUser])

  return (
    <div className="flex items-center justify-between p-4 border-b bg-slate-800/50 border-slate-700/50 max-h-[60px] px-6 flex-1">
        <div className="flex items-center space-x-3">
            <div className={`avatar ${isOnline ? "online" : "offline"}`}>
                <div className="w-12 rounded-full">
                    <img
                      src={selectedUser?.profilePic || "/avatar.png"}
                      alt={selectedUser?.fullName}
                      onError={(e) => {
                        e.currentTarget.src = "/avatar.png";
                      }}
                    />
                </div>
            </div>
            <div>
              <h3 className="font-medium text-slate-200">{selectedUser.fullName}</h3>
              <p className="text-sm text-slate-400">
                {isOnline ? "Online" : "Offline"}
              </p>
            </div>
        </div>
        <button onClick={()=>setSelectedUser(null)} className="text-slate-400 hover:text-slate-200 transition-colors">
          <X className="w-6 h-6"/>
        </button>
    </div>
  )
}

export default ChatHeader