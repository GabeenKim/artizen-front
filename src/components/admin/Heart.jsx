import React, { useState, useEffect } from 'react';
import { BsHeartFill, BsHeart} from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart, AiFillStar, AiOutlineStar} from 'react-icons/ai';
import { BiSolidShareAlt } from 'react-icons/bi';

function Heart({ onJoinClick, contentId}) {
  const [liked1, setLiked1] = useState(false);
  const [liked2, setLiked2] = useState(false);

  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem('contentId') || "[]");
    setLiked1(savedIds.includes(contentId));
  }, [contentId]);

  const toggleLike1 = () => {
    const liked = !liked1;
    setLiked1(liked);

    const savedIds = JSON.parse(localStorage.getItem('contentId') || "[]");
    if (liked) {
      localStorage.setItem('contentId', JSON.stringify([...savedIds, contentId]));
    } else {
      const filteredIds = savedIds.filter(id => id !== contentId);
      localStorage.setItem('contentId', JSON.stringify(filteredIds));
    }
  };

  const toggleLike2 = () => {
    setLiked2(!liked2);
  };



  const buttonStyle = {
    background: "#f5f5f5",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "10px",
    height: "60px",
    marginRight:"10px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div style={{ position: "relative", display: "flex" }}>
      <button onClick={toggleLike1} style={{ ...buttonStyle, width: "50px" }}>
          {liked1 ? <AiFillHeart color="red" size="30px" /> : <AiOutlineHeart color="grey" size="30px" />}
          <div></div>
        </button>
        <button onClick={onJoinClick} style={{ ...buttonStyle, width: "250px", background: "#51aff7", border: "1px solid #51aff7",}}> 
            참여하기 | 102% 모집
        </button>
        
        <button style={{ ...buttonStyle, width: "50px" }}>
          <BiSolidShareAlt color="grey" size="30px" />
        </button>
      <button onClick={toggleLike2} style={{ ...buttonStyle, width: "50px" }}>
          {liked2 ? <AiFillStar color="yellow" size="30px" /> : <AiOutlineStar color="grey" size="30px" />}
          <div></div>
        </button>
      
      </div>
    </div>
  );
}

export default Heart;