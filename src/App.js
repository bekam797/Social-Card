import React from 'react';
import Card from './Components/Card';
import cardData from './CardData';
import Logo from './assets/imges/logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card
        name={cardData.name}
        headline={cardData.headline}
        message={cardData.message}
        logoUrl={Logo}
        url={cardData.url}
        urldisplayname={cardData.urldisplayname}
      />
    </div>
  );
}

export default App;
