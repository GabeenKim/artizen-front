import React from 'react';
import '../../App.css';

function Ranker({ name, totalPrice, img }) {
  return (
    <div>
      <div className="ranking-item">
        <img src={img} alt="movie" href="#"></img>
        <div className="ranking-content">
          {/* span에서 div로 변경 */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              id="card-title"
              style={{
                width: '100%',
              }}
            >
              <h2>{name}</h2>
              <h3> 금액 {totalPrice}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ranker;
