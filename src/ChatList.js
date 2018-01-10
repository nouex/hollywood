import React, {Component} from 'react';
import moment from 'moment';

class ChatList extends Component {
  constructor(props) {
    super(props)
    this.timeoutId = null
  }

  componentWillMount() {
    this.updateTime()
  }

  componentWillUnMount() {
    if (null !== this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  updateTime() {
    this.forceUpdate()
    this.timeoutId = setTimeout(this.updateTime.bind(this), 3000)
  }

  render() {
    let {items} = this.props
    return (
      <ul>
        {items.map(({id: date, text}) => {
          let item = <li className="d-inline">{text}</li>,
              formattedTime = moment(date).fromNow() + ": "

          return (
            <div key={date}>
              {formattedTime}
              "{item}"
            </div>
          )
        })}
      </ul>
    )
  }
}

export default ChatList
