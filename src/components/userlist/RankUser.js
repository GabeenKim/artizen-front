import React from 'react';
import '../../App.css';

function RankUser({ id, name, totalPrice, img }) {
  return (
    <div className="cardContainer" style={{height:'500px'}}>
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
          <h2 style={{lineHeight : '50px',marginTop:'0px',height : '50px' ,backgroundColor : '#ff8a8a', color:'white'}}>{name}</h2>
        </div>
      </div>

      <div id="card-content" style={{ lineHeight: '1.5' }}>
        <p>이번 달 {name}님의 펀딩 수익률</p>
        <h1> 금액 : {parseInt(totalPrice).toLocaleString()} ₩</h1>
      </div>
    </div>
  );
}

export default RankUser;
