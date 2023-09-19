import React, { useState } from 'react';
import '../App.css';

import RankerList from '../components/userlist/RankerList';
import RankUserListComponent from '../components/userlist/RankUserListComponent';

function ComSupportPage(props) {
  const [rankings, setRanking] = useState([]);
  const [isListVisible, setListVisible] = useState(false);

  const loadMoreItems = () => {
    if (!isListVisible) {
      // 리스트가 숨겨져 있는 경우만 데이터 로드
      const endpoint = `http://localhost:9999/funding/showSupportRank`;
      fetch(endpoint)
        .then((response) => response.json())
        .then((response) => {
          setRanking(response.slice(3, 10));
          setListVisible(true); // 데이터 로드 후 리스트 표시
          console.log('전체순위보기', rankings, isListVisible);
        });
    } else {
      setListVisible(false); // 이미 보이는 경우에는 리스트 숨김
    }
  };

  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ width: '75%', height :'100vh' ,margin: '1rem auto' }}>
      <div id="rankTitle1">
        <h2>이달의 펀드왕</h2>
        <h1>TOP 3</h1>
      </div>
      {/*카드형식 페이지*/}
      <RankUserListComponent />
      {/*더보기란*/}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={loadMoreItems} id="moreBtn">
          See All
        </button>
      </div>
      {isListVisible && <RankerList rankings={rankings} />}
    </div>
  );
}

export default ComSupportPage;
