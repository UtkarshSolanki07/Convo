import BorderAnimatedContainer from '../components/BorderAnimatedContainer'
import { useChatStore } from '../store/useChatStore'
import ProfileHeader from '../components/ProfileHeader'
import ActiveTabSwitch from '../components/ActiveTabSwitch'
import ChatsList from '../components/ChatsList'
import ContactList from '../components/ContactList'
import ChatContainer from '../components/ChatContainer'
import NoConversationPlaceholder from '../components/NoConversationPlaceholder'

/**
 * Renders the two-pane chat page driven by chat store state.
 *
 * The left pane contains the profile header, tab switch, and either the chats list or contact list
 * depending on the active tab. The right pane displays the chat container when a user is selected
 * or a placeholder when no conversation is selected.
 *
 * @returns {JSX.Element} The chat page element with the left navigation pane and the main chat pane.
 */
function ChatPage() {
  const {activeTab,selectedUser}=useChatStore()
  return (
    <div className='relative w-full max-w-6xl h-[800px]'>
    <BorderAnimatedContainer>
      <div className='w-80 bg-slate-900/50 backdrop-blur-sm flex flex-col '>
        <ProfileHeader/>
        <ActiveTabSwitch/>
        <div className='flex-1 overflow-y-auto p-4 space-y-2'>
          {activeTab === "chats" ? (
            <ChatsList/>
          ) : (
            <ContactList/>
          )}
        </div>
      </div>

      <div className='flex-1 flex flex-col bg-slate-950/50 backdrop-blur-sm'>
        {selectedUser ? <ChatContainer/> : <NoConversationPlaceholder/> }
      </div>
    </BorderAnimatedContainer>
    </div>
  )
}

export default ChatPage