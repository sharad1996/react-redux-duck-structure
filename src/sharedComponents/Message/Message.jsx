import React from 'react';

const Message = ({ message, typeOfMessage }) => (
    <div className={"alert " + typeOfMessage}>
        <div className="alert-message">{message}</div>
    </div>
);

export default Message;


