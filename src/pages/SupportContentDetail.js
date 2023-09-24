
import React, { useEffect, useState } from 'react';
import MenuBar from "../components/MenuBar";
import Gift from '../components/content/Gift';
import Heart from '../components/content/Heart';
import Info2 from '../components/content/Info2';
import Detail2 from '../components/content/Detail2';
import { useParams } from 'react-router-dom';
import Image2 from '../components/content/Image2';
import SwipeableEdgeDrawer2 from '../components/review/SwipeableEdgeDrawer2';
import SwipeableEdge from '../components/review/SwipeableEdge2';
import Title2 from '../components/content/Title2';

export default function SupportContentDetail() {
    const { contentId } = useParams();
    const [openDrawer, setOpenDrawer] = useState(false); 
    const [openDrawer2, setOpenDrawer2] = useState(false); 

const handleToggleDrawer = () => {
    console.log("handleToggleDrawer called"); 
    setOpenDrawer(!openDrawer);
};

const handleToggleDrawer2 = (newOpen) => () => {
    console.log("handleToggleDrawer called"); 
    setOpenDrawer2(newOpen);
};

return (
  <div style={{background: "white", overflowY:"auto", marginLeft:"100px"}}>
    <MenuBar/>
    <div style={{position: "relative", height: "800px"}}>
    <div style={{ 
    position:"absolute",
    top:"200px",
    background: "black", 
    zIndex: 1}}>
    </div>
    <div style={{ position: "absolute", top: "150px", left: "600px"}}>
    <Title2 contentId={contentId}/>
    </div>
    <div style={{ position: "absolute", top: "300px", left: "220px"}}>
    <Image2 contentId={contentId} style={{ width: "100px", height: "100px", objectFit: "cover" }}/>
    </div>
        {/* Adjusted Info's position */}
        <div style={{ position: "absolute", top: "280px", left: "930px"}}>
            <Info2 contentId={contentId} />
        </div>
        
        {/* Adjusted Heart's position */}
        <div style={{ position: "absolute", top: "80%", left: "920px", transform: "translateY(-50%)" }}>
            <Heart onJoinClick={handleToggleDrawer} onReviewClick={handleToggleDrawer2} contentId={contentId} isFunding={false}/> 
        </div>
        <div>
            <SwipeableEdgeDrawer2 contentId={contentId} open={openDrawer} onClose={handleToggleDrawer}/> 
            <SwipeableEdge contentId={contentId} open={openDrawer2} toggleDrawer={handleToggleDrawer2} />
        </div>
      
    </div>
    <div>
    <Detail2 contentId={contentId} />
    </div>
    {/*
    <div style={{ position: "absolute", right: "50px", top: '200%', transform:'translateY(-50%)' }}>
          <Gift />
    </div>
    */}
  </div>
  
);
}
