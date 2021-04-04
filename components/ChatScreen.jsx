import React from "react";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/AttachFile";

import { auth } from "../firebase";

const Container = styled.div``;

const Header = styled.div``;

const HeaderInformation = styled.div``;

const HeaderIcons = styled.div``;

const ChatScreen = ({ chat, message }) => {
  const [user] = useAuthState(auth);
  const router = useRouter();

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
    </Container>
  );
};

export default ChatScreen;
