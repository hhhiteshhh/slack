import React, { useState, useEffect } from "react";
import styled from "styled-components";
function Message({ message, timestamp, user, userImage }) {
  const [formatted_date, setFormatted_date] = useState();

  useEffect(() => {
    let current_datetime = new Date(timestamp?.toDate());
    var hours = current_datetime.getHours(); // gives the value in 24 hours format
    var AmOrPm = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;
    var minutes = current_datetime.getMinutes();
    var finalTime = hours + ":" + minutes + " " + AmOrPm;

    setFormatted_date(
      current_datetime.getDate() +
        "/" +
        (current_datetime.getMonth() + 1) +
        "/" +
        current_datetime.getFullYear() +
        " " +
        finalTime
    );
  });

  return (
    <MessageContainer>
      <img src={userImage} alt="" />
      <MessageInfo>
        <h4>
          {user} <span>{formatted_date}</span>{" "}
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  > img {
    height: 50px;
    border-radius: 999px;
  }
`;
const MessageInfo = styled.div`
  padding-left: 10px;
  > h4 > span {
    color: gray;
    font-weight: 500;
    margin-left: 4px;
    font-size: 10px;
  }
`;
