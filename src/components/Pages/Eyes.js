import React from 'react'
import Spotify from '../Spotify';
import { ProjectList } from '../../data/ProjectList'
// import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
// import {
//   MainContainer,
//   ChatContainer,
//   MessageList,
//   Message,
//   MessageInput,
// } from "@chatscope/chat-ui-kit-react";
import { ChatFeed, ChatBubble, BubbleGroup, Message } from "react-chat-ui";

import './Projects.css'

const Eyes = () => {
  const allMessage = [
    {
      message: "Hello",
      senderName: "Eve"
    }
  ]
   


  return (
    <div className = "Eyes">
      <h1>Angel in Others' Eyes</h1>
      <div className="spotify">
        <Spotify className="item" link="https://open.spotify.com/album/0fUy6IdLHDpGNwavIlhEsl?si=mTiITmlHQpaGkoivGTv8Jw" />
      </div>

    
    <ChatFeed
      messages={allMessage}
      showSenderName

      bubbleStyles={
        {
          text: {
            fontSize: 30
          },
          chatbubble: {
            borderRadius: 50,
            padding: 10
          }
        }
      }
    >

    </ChatFeed>
    
    </div>
  )
}

export default Eyes
