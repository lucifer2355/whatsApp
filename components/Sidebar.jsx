import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";

const Container = styled.div``;

const Header = styled.div``;

const UserAvatar = styled(Avatar)``;

const IconContainer = styled.div``;

const Sidebar = () => {
  return (
    <Container>
      <Header>
        <UserAvatar />

        <IconContainer></IconContainer>
      </Header>
    </Container>
  );
};

export default Sidebar;
