import React from 'react';
import Message from './Message';
import './MessageList.scss';

export default function (props) {
  const messageList = props.messages.map((msg, i) => {
    return (
      <Message
        key={i}
        ownMessage={msg.user && props.thisUser.id === msg.user.id}
        message={msg}
      />
    );
  });

  return (
    <div className="message-list">
      {messageList}
    </div>
  );
}
