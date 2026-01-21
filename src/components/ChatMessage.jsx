import robotPic from '../assets/robot.png';
import userPic from '../assets/user.png';
import './ChatMessage.css';
    export function ChatMessage({ message, sender }) {
      return (
        <div className = {sender ==='robot' ? "chat-message-robot" : "chat-message-user"}>
          {sender === "robot" && <img src={robotPic} width="50" />}
          <div className = "chat-message-text">
            {message}
          </div>
          {sender === "user" && <img src={userPic} width="50" />}
        </div>
      );
    }