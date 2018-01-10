import React, { Component } from 'react';
import ChatList from './ChatList';
import EmojiSelector from "./EmojiSelector"

class ChatWindow extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmojiSelect = this.handleEmojiSelect.bind(this)
    this.state = {items: [], text: ''};
  }

  render() {
    return (
      <div>
        <h3>Stukent Chat App</h3>
        <ChatList items={this.state.items}/>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>{'Send'}</button>
        </form>
        <EmojiSelector onSelect={this.handleEmojiSelect}/>
      </div>
    );
  }

  handleEmojiSelect(emoji) {
    this.setState((prevState, props) => ({
      text: prevState.text + emoji
    }))
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }

}

export default ChatWindow;
