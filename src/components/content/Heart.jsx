import React, { useState } from 'react';
import { BsHeartFill, BsHeart} from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart, AiFillStar, AiOutlineStar} from 'react-icons/ai';
import { BiSolidShareAlt } from 'react-icons/bi';

function Heart({ onJoinClick }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
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
      <button onClick={toggleLike} style={{ ...buttonStyle, width: "50px" }}>
          {liked ? <AiFillHeart color="red" size="30px" /> : <AiOutlineHeart color="grey" size="30px" />}
          <div>100</div>
        </button>
        <button onClick={onJoinClick} style={{ ...buttonStyle, width: "250px", background: "#51aff7", border: "1px solid #51aff7",}}> 
            참여하기 | 102% 모집
        </button>
        
        <button style={{ ...buttonStyle, width: "50px" }}>
          <BiSolidShareAlt color="grey" size="30px" />
        </button>
      <button onClick={toggleLike} style={{ ...buttonStyle, width: "50px" }}>
          {liked ? <AiFillStar color="yellow" size="30px" /> : <AiOutlineStar color="grey" size="30px" />}
          <div>100</div>
        </button>
      
      </div>
    </div>
  );
}

export default Heart;