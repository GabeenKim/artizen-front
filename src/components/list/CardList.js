import React from 'react';
import Card from './Card';

function CardList({ content }) {
  const img = [
    'https://i.namu.wiki/i/m6l0w2CgAGQrxSKy7rrcLB261rrMO-oq04ZCnS-wEU5sNqq8rR-gG2Zki_HloDFgP7gdfM_IoQK_m19OGqJKjw.webp',
    'https://i.namu.wiki/i/CM9WgqYNFXtGFZCtBU1r2Exs1y-zKyjmIW55gBudgExj9Q6NIfUavAeq7Tn55FB-GxyJ8hWK9PShcQVBdxJPwQ.webp',
    'https://i.namu.wiki/i/wIEyPApLIJsDBcrg3Ryib-7zjFYzZiIoJSwn3lN47Jzk6_SNXr-gM0rfIc9q9hBVkOHNAx9fNWtt0YTHEy6JQQ.webp',
  ];
  return (
    <div className="cardList">
      {content &&
        content.map((content, index) => (
          <Card
            key={index}
            id={content.conentId}
            contentName={content.contentName}
            contentSum={content.contentSum}
            category={content.category}
            endDay={content.endDay}
            startDay={content.startDay}
            likes={content.likes}
            target={content.target}
            img={img[index]}
          />
        ))}
    </div>
  );
}

export default CardList;
