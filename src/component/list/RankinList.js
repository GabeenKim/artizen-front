import React from 'react';
import RankingCard from './RankingCard';

function RankingList({ rankings }) {
  const img = [
    'https://upload.wikimedia.org/wikipedia/ko/b/b8/1917%EC%98%81%ED%99%94_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
    'https://blog.kakaocdn.net/dn/bmIwxA/btrVE1Ql6YL/kfImMiXEd19Kch9ziopPj0/img.jpg',
    'https://cdn.aitimes.com/news/photo/202208/146184_153838_2628.jpg',
    'https://joyposter.cafe24.com//NEW-posters/FMV/FMV-308.jpg',
    'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201602/19/htm_20160219171437117902.jpg',
    'https://blog.kakaocdn.net/dn/ccfwOP/btrVA1wUYr7/lDJbx70HRoSsJEK7YG9uJk/img.jpg',
    'https://image.jtbcplus.kr/data/contents/jam_photo/202302/16/7c59ec5a-72ec-4c4e-8c21-dbeaebee7a57.jpg',
    'https://img2.quasarzone.com/editor/2023/03/28/362217a5a1e2a040687b12b2d212de0f.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwWY3WR3S5KnLxr70roXOsIdaNk9nmQmz5w1ybEhypW7CPu7sSmG1QXe7wqPeBF8RKbFA&usqp=CAU',
    'https://img.sbs.co.kr/newimg/news/20230429/201778833_500.jpg',
  ];
  return (
    <div className="ranking-grid">
      {rankings.map((ranking, index) => (
        <RankingCard
          id={ranking.conentId}
          contentName={ranking.contentName}
          contentSum={ranking.contentSum}
          category={ranking.category}
          startDay={ranking.startDay}
          endDay={ranking.endDay}
          likes={ranking.likes}
          img={img[index]}
        />
      ))}
    </div>
  );
}

export default RankingList;
