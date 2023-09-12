import React from 'react';
import Ranker from './Ranker';

function RankingList({ rankings }) {
  const img = [
    'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_user_profile_user_icon_user_thump_icon_149321.png',
    'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_user_profile_user_icon_user_thump_icon_149317.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmE--NjTTosid1jFeMFdc12EVQtKi7XPRMYqeHI0_4jJlqBanUiyQ-KrqN5tsdK_MO0j8&usqp=CAU',
    'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_user_profile_user_icon_user_thump_icon_149319.png',
    'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_user_profile_user_icon_user_thump_icon_149315.png',
  ];
  return (
    <div className="ranking-grid">
      {rankings.map((ranking, index) => (
        <Ranker
          key={ranking.index}
          name={ranking.userInfo.name}
          totalPrice={ranking.support[0].price}
          img={img[index]}
        />
      ))}
    </div>
  );
}

export default RankingList;
