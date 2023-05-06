import React from 'react'
import Spotify from '../Spotify'
import { ChatFeed, ChatBubble, BubbleGroup, Message } from "react-chat-ui";
import './Eyes.css'

const Eyes = () => {
  const allMessage = [
    {
      id: 1,
      avatarUrl: "https://image.flaticon.com/icons/svg/2446/2446032.svg",
      message: "Angel is the definition of a model leader. She is incredibly compassionate, eloquent, hardworking, and overall an incredible person. I am so honored I got to know her through CASA, as she always lights up the room!",
      senderName: "Kim Walters"
    }, {
      id: 2,
      avatarUrl: "https://image.flaticon.com/icons/svg/2446/2446032.svg",
      message: "One of the most gentle and caring people I’ve ever met <3",
      senderName: "Julie Kim"
    }, {
      id: 3,
      avatarUrl: "https://image.flaticon.com/icons/svg/2446/2446032.svg",
      message: "She is the most sweetest, calmest, and creative person I have met. ",
      senderName: "Nandini Kumar"
    }, {
      id: 4,
      avatarUrl: "https://image.flaticon.com/icons/svg/2446/2446032.svg",
      message: "Angel is not only one of the sweetest people I have ever but also the most hardworking. She’s always so encouraging and hype!! 😤😤 I would let her step on me ",
      senderName: "Priscilla Poon"
    }, {
      id: 5,
      avatarUrl: "https://image.flaticon.com/icons/svg/2446/2446032.svg",
      message: "The sweetest person ever, she's someone who's fun to work with and makes you confident and excited about what's next!!",
      senderName: "Hannah Paultre"
    }, {
      id: 6,
      avatarUrl: "https://image.flaticon.com/icons/svg/2446/2446032.svg",
      message: "Literal Angel, caring and patient, accomplished Compsci Queen",
      senderName: "Raina Fan"
    }, {
      id: 7,
      avatarUrl: "https://image.flaticon.com/icons/svg/2446/2446032.svg",
      message: "Angel is one of the sweetest people I’ve ever met. She’s very talented in a lot of things including baking, playing instruments, dancing, etc. Everyone needs an Angel in their life",
      senderName: "Marla Horn"
    }, {
      id: 8,
      avatarUrl: "https://image.flaticon.com/icons/svg/2446/2446032.svg",
      message: "Angel is always so sweet, kind, and encouraging, and I have learned so much from her!",
      senderName: "Angela Jiang"
    }, {
      id: 9,
      avatarUrl: "https://image.flaticon.com/icons/svg/2446/2446032.svg",
      message: "Angel is one of the sweetest people I have ever met. She’s always smiling and able to lend a helping hand.",
      senderName: "Taylor Stephens"
    }, {
      id: 10,
      avatarUrl: "https://image.flaticon.com/icons/svg/2446/2446032.svg",
      message: "Angel is very sweet, loyal, and smart. She’s a friend who is always there for you.",
      senderName: "Alex Andrade"
    },
    {
      id: 11,
      avatarUrl: "../../images/m0.jpg",
      message: <Spotify className="item" link="https://open.spotify.com/album/0fUy6IdLHDpGNwavIlhEsl?si=mTiITmlHQpaGkoivGTv8Jw" />,
      senderName: "Susana"
    }
  ]
  return (
    <div className = "Eyes">
      <h1>Angel in Others' Eyes</h1>
      <div className="Chats">
        <ChatFeed
          messages={allMessage}
        showSenderName
        bubbleStyles={
          {
            text: {
              fontSize: 15,
              color: "black"
            },
            chatbubble: {
              borderRadius: 15,
              padding: 10,
              margin: 5
            }
          }
        }
      >
      </ChatFeed>
      </div>
    </div>
  )
}

export default Eyes
