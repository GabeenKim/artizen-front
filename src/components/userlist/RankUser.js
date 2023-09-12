import React from 'react';
import '../../App.css';

function RankUser({ id, name, totalPrice, img }) {
  return (
    <div className="cardContainer">
      <img src={img} alt="movie" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <div
          id="card-title"
          style={{
            width: '100%',
          }}
        >
          <h2>{name}</h2>
        </div>
      </div>

      <div id="card-content" style={{ lineHeight: '1.5' }}>
        <h1> 금액 : {totalPrice}</h1>
      </div>
    </div>
  );
}

export default RankUser;
