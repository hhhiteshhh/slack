import { Button } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import { db, auth } from "../firebase";
import firebase from "firebase";
function ChatInput({ channelId, ChannelName, ChatRef }) {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }
    db.collection("room").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: auth.currentUser.displayName,
      userImage: auth.currentUser.photoURL,
    });
    ChatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
    setInput("");
  };

  return channelId ? (
    <ChatInputContainer>
      <form>
        <input
          placeholder={`Message #${ChannelName}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  ) : (
    ""
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
  > form > button {
    display: none;
  }
`;
