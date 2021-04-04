import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;

  :hover {
    background-color: #e9eaeb;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;

const Chat = ({ id, users }) => {
  return (
    <Container>
      <UserAvatar />
      <p>Recipient Email</p>
    </Container>
  );
};

export default Chat;
