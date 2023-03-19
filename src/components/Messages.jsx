import React from "react";

const Messages = ({ msg, messages }) => {
  if (msg == messages.win) {
    return <h1 style={{ color: "green" }}>{msg}</h1>;
  } else if (msg == messages.close) {
    return <h1 style={{ color: "yellow" }}>{msg}</h1>;
  } else {
    return <h1 style={{ color: "red" }}>{msg}</h1>;
  }
};

export default Messages;
