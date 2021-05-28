import React from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { useDispatch } from "react-redux";
import { enterRoom } from "../features/appSlice";
import firebase from "firebase";

function SidebarOption({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch();
  console.log(title);
  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      db.collection("room").add({
        name: channelName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
  };
  const selectChannel = () => {
    if (id) {
      dispatch(enterRoom({ roomId: id }));
    }
  };

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3> {title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span>
          {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  padding-left: 2px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > h3 {
    font-weight: 500;
    > span {
      padding: 15px;
    }
  }
`;
const SidebarOptionChannel = styled.h3`
  display: flex;
  align-items: center;

  padding-left: 15px 0;
  font-weight: 300;
`;
