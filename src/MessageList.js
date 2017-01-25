import React from 'react';
import Message from './Message';
import SelectOptions from './SelectOptions';
import ResultList from './ResultList';
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

  const lastMessage = props.messages[props.messages.length - 1];
  const options = lastMessage ? lastMessage.options : null;

  return (
    <div className="message-list">
      {messageList}
      {lastMessage && lastMessage.type === "select" ?
          <SelectOptions options={options} handleClick={props.handleSelectOption} /> : null }
      {lastMessage && lastMessage.type === "results" ?
          <ResultList flights={lastMessage.flights} /> : null }
    </div>
  );
};
