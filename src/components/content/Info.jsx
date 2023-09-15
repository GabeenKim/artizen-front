import React, { useState } from 'react';

function Info() {
  const [contentSum, setContentSum] = useState(""); 
  const toggleLike = () => {
    
  };

  return (
    <div>
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center" }}>     
    <h3 style={{ marginRight: "30px" }}>무빙</h3>
   
    <button style={{ position: "relative", bottom: "30px" , background: "#f5f5f5", border: "1px solid #ddd", borderRadius: "5px",
          width: "70px", height: "20px", marginRight:"10px"}}>드라마</button>    
    </div>
    <div style={{ position: "relative", display: "flex" }}>
    <h4 style={{marginRight:"90px"}} id="contentSum" type="text" value={contentSum} onChange={e => setContentSum(e.target.value)} name="contentSum">모인금액</h4>
    <h4 style={{marginRight:"90px"}}> 목표 금액</h4>
    <h4 style={{marginRight:"90px"}}>기간</h4>
    </div>
    </div>

  );
}

export default Info;