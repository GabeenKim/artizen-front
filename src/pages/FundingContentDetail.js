import React, { useState } from 'react';
import MenuBar from "../components/MenuBar";
import Gift from '../components/content/Gift';
import Heart from '../components/content/Heart';
import Info from '../components/content/Info';

export default function FundingContentDetail(){
    return (
        <div style={{background: "white"}} >
            <MenuBar/>
        <div style={{ position: "relative", height: "100vh" }}>
        <div style={{ position: "absolute", top: "200px", left: "470px" }}>
        <Info/>
        </div>
        {/* Heart component */}
        <div style={{ position: "absolute", bottom: "50px", left: "390px" }}>
          <Heart />
        </div>

        {/* Gift component */}
        <div style={{ position: "absolute", right: "100px", top: '50%', transform:'translateY(-50%)' }}>
          <Gift />
        </div>
        
        {/* Other components and contents */}
      </div>
      </div>
        
    )
}