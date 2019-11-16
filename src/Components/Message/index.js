import React from 'react';

function Message(props) {
  return (
    <div className="message">
      <span>{props.pseudo}:</span>
      <p>{props.content}</p>
    </div>
  )
}

export default Message;