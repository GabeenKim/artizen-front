import React, { useState } from 'react';
import '../App.css';

import CardComponent from '../components/list/CardComponent';
import RankingList from '../components/list/RankinList';

function ComFundingPage() {
  const [rankings, setRanking] = useState({});
  const [isListVisible, setListVisible] = useState(false);

  const loadMoreItems = () => {
    console.log(isListVisible);
    if (!isListVisible) {
      // 리스트가 숨겨져 있는 경우만 데이터 로드
      const endpoint = `http://localhost:9999/community/showContentsRank1`;
      fetch(endpoint)
        .then((response) => response.json())
        .then((response) => {
          setRanking(response.slice(3, 10));
          setListVisible(true); // 데이터 로드 후 리스트 표시
        });
    } else {
      setListVisible(false); // 이미 보이는 경우에는 리스트 숨김
    }
  };

  console.log(rankings);

  return (
    <div style={{ width: '75%', margin: '1rem auto' }}>
      <div id="rankTitle1">
        <h2>수익률 상위 작품 </h2>
        <h1>TOP 3</h1>
      </div>
      {/*카드형식 페이지*/}
      <CardComponent />
      {/*더보기란*/}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={loadMoreItems} id="moreBtn">
          See All
        </button>
      </div>
      {/* isListVisible 상태에 따라 조건부 렌더링 */}
      {isListVisible && <RankingList rankings={rankings} isFunding={true}/>}
    </div>
  );
}

export default ComFundingPage;
