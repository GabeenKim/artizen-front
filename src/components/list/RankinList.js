import React from 'react';
import RankingCard from './RankingCard';

function RankingList({ rankings, isFunding }) {
 
  return (
    <div className="ranking-grid">
      {rankings &&
        rankings.map((ranking, index) => (
          <RankingCard
            key={index}
            id={ranking.contentId}
            contentName={ranking.contentName}
            contentSum={ranking.contentSum}
            category={ranking.category}
            startDay={ranking.startDay}
            endDay={ranking.endDay}
            likes={ranking.likes}
            img={ranking.image[0].imageUrl}
            isFunding={isFunding}
          />
        ))}
    </div>
  );
}

export default RankingList;
