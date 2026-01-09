import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";
import NoChatsFound from "./NoChatsFound";
import { useAuthStore } from "../store/useAuthStore";

/**
 * Render the list of chat partners with avatars, online status, and selection handling.
 *
 * On mount, triggers retrieval of the current user's chat partners. While partners are loading
 * it renders a loading skeleton; if none are found it renders an empty-state component.
 * Each chat item shows an avatar (with fallback), the partner's full name, and marks online users.
 *
 * @returns {JSX.Element} A React element containing the chats list, a loading skeleton, or an empty-state component.
 */
function ChatsList() {
  const { getMyChatPartners, chats, isUsersLoading, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getMyChatPartners();
  }, [getMyChatPartners]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;
  if (chats.length === 0) return <NoChatsFound />;

  return (
    <>
      {chats.map((chat) => (
        <div
          key={chat._id}
          className="bg-cyan-500/10 p-4 rounded-lg cursor-pointer hover:bg-cyan-500/20 transition-colors"
          onClick={() => setSelectedUser(chat)}
        >
          <div className="flex items-center gap-3">
            <div className={`avatar ${onlineUsers.includes(chat._id) ? "online" : "offline"}`}>
              <div className="size-12 rounded-full">
                <img
                  src={chat.profilePic || "/avatar.png"}
                  alt={chat.fullName}
                  onError={(e) => {
                    e.currentTarget.src = "/avatar.png";
                  }}
                />
              </div>
            </div>
            <h4 className="text-slate-200 font-medium truncate">{chat.fullName}</h4>
          </div>
        </div>
      ))}
    </>
  );
}
export default ChatsList;