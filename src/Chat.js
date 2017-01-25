import React, { Component } from 'react';
import MessageList from './MessageList';
import ChatForm from './ChatForm';
import mockServer from './mockServer/mockServer';
import getServerURL from './getServerURL';
import './Chat.scss';

const WS_ADDRESS = getServerURL();

if (process.env.NODE_ENV === 'development') {
  mockServer(WS_ADDRESS);
}

class Chat extends Component {
  constructor(props) {
    super(props);
    this.user = { id: 1, name: 'Me' };
    this.state = { messages: [] };
    this.handleMessage = this.handleMessage.bind(this);
    this.handleSelectOption = this.handleSelectOption.bind(this);
  }

  pushMessage(msg) {
    this.setState({ messages: [...this.state.messages, msg] });
  }

  componentDidMount() {
    this.socket  = new WebSocket(WS_ADDRESS);
    this.socket.onmessage = ({ data }) => {
      this.pushMessage(JSON.parse(data));
    };
  }

  handleMessage(msg) {
    this.pushMessage({
      type: "text",
      user: this.user,
      label: msg
    });
    this.socket.send(msg);
  }

  handleSelectOption(opt) {
    this.pushMessage({
      type: "text",
      user: this.user,
      label: opt.name
    });
    this.socket.send(opt.id);
  }

  render() {
    return (
      <div className="Chat">
        <MessageList
          messages={this.state.messages}
          thisUser={this.user}
          handleSelectOption={this.handleSelectOption}
        />
        <ChatForm handleMessage={this.handleMessage} />
      </div>
    );
  }
}

export default Chat;
