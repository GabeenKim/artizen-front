import React, { useEffect, useState } from 'react';
import RankUserList from './RankUserList';

function RankUserListComponent() {
  const [rank, setRank] = useState([]);

  useEffect(() => {
    const endpoint = `http://localhost:9999/funding/showSupportRank`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setRank(response.slice(0, 3));
      });
  }, []);

  return (
    <div className="cardComponent">
      <RankUserList rank={rank} />
    </div>
  );
}

export default RankUserListComponent;
