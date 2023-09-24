import React from 'react';
import Ranker from './Ranker';

function RankingList({ rankings }) {
  const img = "https://cdn.icon-icons.com/icons2/3446/PNG/512/account_profile_user_avatar_icon_219236.png"


  return (
    <div className="ranking-grid">
      {rankings &&
        rankings.map((ranking, index) => (
          <Ranker
            key={index}
            name={ranking.userInfo.name}
            totalPrice={ranking.support[0].price}
            img={img}
          />
        ))}
    </div>
  );
}

export default RankingList;
