  import { useRef,useEffect} from 'react'
  import { ChatMessage} from './ChatMessage';
  import './ChatMessages.css';
  export function ChatMessages({chatMessages}) {
    const chatMessagesRef = useRef(null);
    useEffect(() => {
      const containerElem = chatMessagesRef.current;
      if(containerElem){
        containerElem.scrollTop = containerElem.scrollHeight;
      }
    }, [chatMessages]);
    //this is array destructuring
    return (
      <div className="chat-messages-container" ref={chatMessagesRef}>
        {chatMessages.map((chat) => (
          <ChatMessage
            key={chat.id}
            message={chat.message}
            sender={chat.sender}
          />
        ))}
      </div>
    );
  }