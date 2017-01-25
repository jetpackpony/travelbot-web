import React from 'react';
import './Message.scss';

export default function(props) {
  return (
    <div className={"message" + (props.ownMessage ? " message-mine" : "")}>
      {props.ownMessage ?  "" : <div className="robot-face" />}
      <div className="message-inner">
        {props.message.label}
      </div>
    </div>
  );
}
