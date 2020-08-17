import React from 'react';

const CardBox = (props) => (
  <div className="cardBox">
    <p className="cardBox__name">{props.name}</p>
    <img className="cardBox-headshot" src={props.logo} alt="Person" />
  </div>
);

export default CardBox;
