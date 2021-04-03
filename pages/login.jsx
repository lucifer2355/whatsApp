import React from "react";
import styled from "styled-components";
import Head from "next/head";

const Container = styled.div``;

const LoginContainer = styled.div``;

const Logo = styled.img``;

const Login = () => {
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Logo />
      </LoginContainer>
    </Container>
  );
};

export default Login;
