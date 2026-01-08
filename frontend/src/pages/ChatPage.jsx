import React from 'react'
import { useAuthStore } from '../store/useAuthStore'

/**
 * Renders the chat page UI including a "Logout" button.
 *
 * The "Logout" button invokes the `logout` action from the authentication store when clicked.
 * @returns {JSX.Element} The React element for the chat page.
 */
function ChatPage() {
  const {logout}=useAuthStore()
  return (
    <div className='z-10'>
      <button onClick={logout}>Logout</button>
    ChatPage
    </div>
  )
}

export default ChatPage