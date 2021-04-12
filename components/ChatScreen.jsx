import React from "react";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "firebase";
import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

import { auth, db } from "../firebase";
import { useState } from "react";

const Container = styled.div``;

const Header = styled.div`
  position: sticky;
  background-color: white;
  z-index: 10;
  top: 0;
  display: flex;
  padding: 11px;
  height: 80px;
  align-items: center;
  border-bottom: 1px solid whitesmoke;
`;

const HeaderInformation = styled.div`
  margin-left: 15px;
  flex: 1;

  > h3 {
    margin-bottom: 14px;
  }

  > p {
    font-size: 14px;
    color: gray;
  }
`;

const HeaderIcons = styled.div``;

const EndOfMessage = styled.div``;

const MessageContainer = styled.div`
  padding: 30px;
  background-color: #e5ded8;
  min-height: 90vh;
`;

const InputContainer = styled.form`
  display: flex;
  align-items: center;
  position: sticky;
  padding: 10px;
  bottom: 0;
  background-color: white;
  z-index: 10;
`;

const Input = styled.input`
  flex: 1;
  outline: 0;
  border: none;
  border-radius: 10px;
  padding: 20px;
  margin-right: 15px;
  margin-left: 15px;
  background-color: whitesmoke;
`;

const ChatScreen = ({ chat, message }) => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [messagesSnapshort] = useCollection(
    db
      .collection("chats")
      .doc(router.query.id)
      .collection("messages")
      .orderBy("timestamp", "asc")
  );
  const [input, setInput] = useState();

  const showMessages = () => {
    if (messagesSnapshort) {
      return messagesSnapshort.docs.map((message) => (
        <Message
          key={message.id}
          user={message.data().user}
          message={{
            ...message.data(),
            timestamp: message
              .data()
              .timestamp?.toDate()
              .getTime(),
          }}
        />
      ));
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("users")
      .doc(user.uid)
      .set(
        {
          lastSceen: firebase.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      );

    db.collection("chats")
      .doc(router.query.id)
      .collection("messages")
      .add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: input,
        user: user.email,
        photoURL: user.photoURL,
      });

    setInput("");
  };

  return (
    <Container>
      <Header>
        <Avatar />

        <HeaderInformation>
          <h3>Rec Email</h3>
          <p>Last seen...</p>
        </HeaderInformation>
        <HeaderIcons>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </HeaderIcons>
      </Header>

      <MessageContainer>
        {showMessages()}
        <EndOfMessage />
      </MessageContainer>

      <InputContainer>
        <InsertEmoticonIcon />
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <button hidden disabled={!input} type='submit' onClick={sendMessage}>
          Send Message
        </button>
        <MicIcon />
      </InputContainer>
    </Container>
  );
};

export default ChatScreen;
