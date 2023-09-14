import React from 'react';
import '../App.css';

function ComTitlePage() {
  return (
    <div className="title">
      <div id="titleTop">
        <h1>Artizen</h1>
        <h1>Monthly Awards</h1>
      </div>
      <div id="titleMiddle">
        <h1>TOP 3</h1>
        <h2>FROM TOP 10</h2>
      </div>
      <div id="titleBottom">
        <img
          src={require('C:/Users/82103/Desktop/react_ex/artizen-project/src/image/arrow.png')}
        />
        <img
          src={require('C:/Users/82103/Desktop/react_ex/artizen-project/src/image/arrow.png')}
        />
        <img
          src={require('C:/Users/82103/Desktop/react_ex/artizen-project/src/image/arrow.png')}
        />
      </div>
    </div>
  );
}

export default ComTitlePage;
