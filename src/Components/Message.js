import React from 'react';

const Message = (props) => (
  <section className="message">
    <h4 className="message__title">{props.title}</h4>
    <p className="message__body">{props.message}</p>
    <a className="message__url" href={props.url}>
      {props.urldisplayname}
    </a>
  </section>
);

export default Message;
