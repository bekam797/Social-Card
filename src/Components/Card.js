import React from 'react';
import Logo from '../Components/Logo';
import Headline from '../Components/Headline';
import CardBox from '../Components/CardBox';

const Card = (props) => (
  <div className="card">
    <section className="main">
      <Logo logo={props.logoUrl} />
      <Headline headline={props.headline} />
      <CardBox logo={props.logoUrl} name={props.name} />
    </section>
  </div>
);

export default Card;
