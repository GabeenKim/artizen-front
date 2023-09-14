import React, { useState } from 'react';
import { BsHeartFill, BsHeart} from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart, AiFillStar, AiOutlineStar} from 'react-icons/ai';
import { BiSolidShareAlt } from 'react-icons/bi';

function Heart() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div style={{ position: "relative", display: "flex" }}>
      <button onClick={toggleLike} style={{background: "#f5f5f5", border: "1px solid #ddd", borderRadius: "5px",
          padding: "10px", width: "50px", height: "40px", marginRight:"10px"}}>
        <div style={{ position: 'relative', top:'-5px'}}>
        { liked ? <AiFillHeart color="red" size="30px" /> : <AiOutlineHeart color="grey" size="30px" /> }
        </div>
      </button>
      <button style={{background: "#f5f5f5", border: "1px solid #ddd", borderRadius: "5px",
          padding: "10px", width: "400px", height: "40px", marginRight:"10px"}}>
            참여하기   |    102%    모집  
    </button>
      <button  style={{background: "#f5f5f5", border: "1px solid #ddd", borderRadius: "5px",
          padding: "10px", width: "50px", height: "40px", marginRight:"10px"}}>
        <div style={{ position: 'relative', top:'-5px'}}>
        { <BiSolidShareAlt color="grey" size="30px" /> }
        </div>
      </button>
      <button onClick={toggleLike} style={{background: "#f5f5f5", border: "1px solid #ddd", borderRadius: "5px",
          padding: "10px", width: "50px", height: "40px"}}>
        <div style={{ position: 'relative', top:'-5px'}}>
        { liked ? <AiFillStar color="yellow" size="30px" /> : <AiOutlineStar color="grey" size="30px" /> }
        </div>
      </button>
      
      </div>
    </div>
  );
}

export default Heart;