import React from 'react';
import '../../App.css';

function Card({
  contentName,
  contentSum,
  category,
  startDay,
  endDay,
  likes,
  img,
}) {
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
            width: '50%',
          }}
        >
          <h2>{contentName}</h2>
        </div>
        <div id="card-rate" style={{ width: '50%' }}>
          <span>수익률 : {contentSum}</span>
        </div>
      </div>

      <div id="card-content" style={{ lineHeight: '1.5' }}>
        <h3>
          {startDay.slice(0, 10)} ~ {endDay.slice(0, 10)}
        </h3>
        <h3>좋아요 수 : {likes} ❤ </h3>
        <h4>카테고리 : {category}</h4>
        <p>간단한 프로젝트 소개글</p>
      </div>
      <a id="footLink" href="#">
        👉 Read full project
      </a>
    </div>
  );
}

export default Card;
