import { useState} from 'react'
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';
import './App.css'

  function App() {
    const [chatMessages, setchatMessages]= useState([
     
    ]);

    return (
      <div className="app-container">
        <ChatMessages 
        chatMessages = {chatMessages}
        />
        <ChatInput 
        chatMessages = {chatMessages}
        setchatMessages = {setchatMessages}
        />
      </div>
    );
  }

export default App
