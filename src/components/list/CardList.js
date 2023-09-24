import React from 'react';
import Card from './Card';

function CardList({ content, isFunding }) {
 
  return (
    <div className="cardList">
      {content &&
        content.map((content, index) => (
          <Card
            key={index}
            id={content.contentId}
            contentName={content.contentName}
            contentSum={content.contentSum}
            category={content.category}
            endDay={content.endDay}
            startDay={content.startDay}
            likes={content.likes}
            target={content.target}
            img={content.image[0].imageUrl}
            isFunding={isFunding}
          />
        ))}
    </div>
  );
}

export default CardList;
