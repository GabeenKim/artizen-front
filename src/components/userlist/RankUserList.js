import React from 'react';
import RankUser from './RankUser';

function RankUserList({ rank }) {
  const img = [
    'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_user_profile_user_icon_user_thump_icon_149321.png',
    'https://cdn.icon-icons.com/icons2/2468/PNG/512/user_user_profile_user_icon_user_thump_icon_149317.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSelxQvYkY19ZRPFkl4ZCEeN7Zw2CUuaQ8UV4JiWEzQ8Xj1D5mLJ9LWgnFyNgdDX3AUKP4&usqp=CAU',
  ];
  console.log(rank);
  return (
    <div className="cardList">
      {rank &&
        rank.map((rank, index) => (
          <RankUser
            key={index}
            name={rank.userInfo.name}
            totalPrice={rank.support[0].price}
            img={img[index]}
          />
        ))}
    </div>
  );
}

export default RankUserList;
