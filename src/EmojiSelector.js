import React from 'react';
import emojisList from "emojis-list"
import Emoji from "./Emoji"
import "./Emoji.css"

class EmojiSelector extends React.Component {
  // withouth this, there is a stutter when adding items fast
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {onSelect} = this.props
    const emojis = emojisList.map((emoji, ind) => {
      return <Emoji val={emoji} onSelect={onSelect} key={ind}/>
    });

    return (
      <div className="EmojiSelector">
        {emojis}
      </div>
    )
  }
}

export default EmojiSelector
