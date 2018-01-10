import React from 'react';
import "./Emoji.css"

const Emoji = ({onSelect, val}) => (
  <div onClick={onSelect.bind(null, val)}
       className="Emoji">
        {val}
  </div>
)

export default Emoji
