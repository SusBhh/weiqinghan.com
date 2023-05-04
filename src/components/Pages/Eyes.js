import React from 'react'
import { ProjectList } from '../../data/ProjectList'
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
} from "@chatscope/chat-ui-kit-react";

import './Projects.css'

const Eyes = () => {
  return (
    <div className = "Eyes">
      <h1>Angel in Others' Eyes</h1>
      <div style={{ position: "relative", height: "300px" , width: "75%"}}>
      <MainContainer>
        <ChatContainer>
          <MessageList>
            <Message
              model={{
                message: "Hello my friend",
                sentTime: "just now",
                sender: "Joe",
              }}
            />
          </MessageList>
        </ChatContainer>
      </MainContainer>
    </div>
    </div>
  )
}

export default Eyes