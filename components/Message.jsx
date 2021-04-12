import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Message = ({ user, message }) => {
  return (
    <Container>
      <p>{message}</p>
    </Container>
  );
};

export default Message;
