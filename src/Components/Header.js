import { Avatar } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { auth } from "../firebase";
function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
          src={auth.currentUser.photoURL}
          onClick={() => {
            auth.signOut();
          }}
          alt={auth.currentUser.displayName[0]}
        />
        <AccessTimeIcon />
      </HeaderLeft>
      <HeaderMiddle>
        <SearchIcon />
        <input placeholder="Search" />
      </HeaderMiddle>
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 0.3;
  margin-left: 20px;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
const HeaderMiddle = styled.div`
  display: flex;
  align-items: center;
  opacity: 1;
  text-align: center;
  background-color: #421f44;
  border: 1px solid gray;
  border-radius: 4px;
  flex: 0.4;
  padding: 5px;
  > input {
    outline: none;
    border: none;
    background: transparent;
    color: white;
    margin-left: 5px;
    width: 100%;
    ::placeholder {
      color: white;
    }
  }
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  flex: 0.3;
  justify-content: flex-end;
  margin-right: 20px;
`;
