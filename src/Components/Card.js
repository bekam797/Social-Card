import React from 'react';
import Logo from './Logo';
import Headline from './Headline';
import CardBox from './CardBox';
import Message from './Message';

const Card = (props) => (
  <div className="card">
    <section className="main">
      <Logo logo={props.logoUrl} />
      <Headline headline={props.headline} />
      <CardBox logo={props.logoUrl} name={props.name} />
    </section>
    <Message
      title={props.headline}
      urldisplayname={props.urldisplayname}
      message={props.message}
      url={props.url}
    />
  </div>
);

export default Card;
