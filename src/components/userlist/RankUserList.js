import React from 'react';
import RankUser from './RankUser';

function RankUserList({ rank }) {
  const img = "https://cdn.icon-icons.com/icons2/3446/PNG/512/account_profile_user_avatar_icon_219236.png"

  console.log(rank);
  return (
    <div className="cardList">
      {rank &&
        rank.map((rank, index) => (
          <RankUser
            key={index}
            name={rank.userInfo.name}
            totalPrice={rank.support[0].price}
            img={img}
          />
        ))}
    </div>
  );
}

export default RankUserList;
