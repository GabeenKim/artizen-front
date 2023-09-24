import React, { useEffect, useState } from 'react';
import CardList from './CardList';

function CardComponent() {
  const [yieldContents, setYieldContents] = useState([]);

  useEffect(() => {
    const endpoint = `http://localhost:9999/community/showContentsRank1`;
    //const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        setYieldContents(response.slice(0, 3));
      });
  }, []);

  return (
    <div className="cardComponent">
      <CardList content={yieldContents} isFunding={true}/>
    </div>
  );
}

export default CardComponent;
