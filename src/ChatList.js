import React from 'react';

function ChatList({items}) {
  return (
    <ul>
      {items.map(({id: date, text}) => {
        let item = <li className="d-inline">{text}</li>,
            formattedTime

        let hrs, mins, secs, meridiem,
            time = new Date(date)
        hrs = time.getHours() % 12
        meridiem = hrs > 12 ? "AM" : "PM"
        hrs = hrs === 0 ? 12 : hrs
        mins = time.getMinutes()
        secs = time.getSeconds()
        formattedTime = [hrs, mins, secs].join(":") + ` ${meridiem}: `

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

export default ChatList
