import React from 'react';
import '../../App.css';

function RankingCard({
  id,
  contentName,
  contentSum,
  category,
  startDay,
  endDay,
  likes,
  img,
}) {
  return (
    <div className="">
      <div className="ranking-item" >
        <img src={img} alt="movie" ></img>
        <div className="ranking-content">
          {/* span에서 div로 변경 */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              id="card-title2"
              style={{
                width: '100%'
              }}
            >
              <h2 style={{ textDecoration: 'none' }}>
                <a style={{ textDecoration: 'none', color: 'inherit', fontSize:'20px' }} href={`/FundingContentDetail/${id}`}>{contentName}</a></h2>
            </div>
            <div id="card-rate" style={{ marginLeft: '20px',marginTop:'0px', width: '100%' }}>
              <span>수익률 : {parseInt(contentSum).toLocaleString()} 원 </span>
            </div>
          </div>

          <p>
            {startDay.slice(0, 10)} ~ {endDay.slice(0, 10)}
          </p>
          <p>좋아요 수 : {likes} ❤</p>
          <p>카테고리 : {category}</p>
          <p>간단한 프로젝트 소개글</p>
        </div>
      </div>
    </div>
  );
}

export default RankingCard;
