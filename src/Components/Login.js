import styled from "styled-components";
import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";

function Login() {
  const login = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((e) => alert(e.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-970-80.jpg.webp"
          alt=""
        />
        <Button onClick={login}> SignIn with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.7);
  > img {
    object-fit: contain;
    height: 100px;
  }
  > button {
    background-color: rgb(54, 197, 240) !important;
    text-transform: inherit !important;
    color: white;
    font-size: 16px;
    font-weight: 500;
    position: relative;
    bottom: -80px;

    :hover {
      background-color: rgb(0, 165, 214) !important;
    }
  }
`;
