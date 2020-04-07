import React from 'react';

// @elie: Nice component logic, Folders.
function Message(props) {
  return (
    <div className="message">
      <span>{props.pseudo}:</span>
      <p>{props.content}</p>
    </div>
  )
}

export default Message;
