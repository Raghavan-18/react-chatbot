import { useState} from 'react'
import {Chatbot} from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({chatMessages, setchatMessages}) {
    const [inputText, setInputText] = useState("");

    function saveInputText(event){
      setInputText(event.target.value);
    }

    function sendMessage() {
      const UserMessage = { 
          message: inputText,
          sender: "user",
          id: crypto.randomUUID()
        }
      ;
      const response = Chatbot.getResponse(inputText);
        const RobotMessage =
            { 
              message: response,
              sender: "robot",
              id: crypto.randomUUID()
            }
          ;

          setchatMessages([
            ...chatMessages,
             UserMessage,
             RobotMessage
          ])
          
       setInputText('')
       // send the message to chatbot server
    }
    function handleKeyDown(event){
      if(event.key === "Enter")
      {
        sendMessage();
      }
        
    }
    return (
      <div className="chat-header">
        <input
          className="chat-input"
          type="text"
          placeholder="Send a message to Chatbot"
          onChange={saveInputText}
          onKeyDown={handleKeyDown}
          value = {inputText}
        />
        <button className="send-button" onClick={sendMessage}>Send</button>
      </div>
    );
  }