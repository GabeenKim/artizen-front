
import React, { useState } from 'react';
import MenuBar from "../components/MenuBar";
import Gift from '../components/content/Gift';
import Heart from '../components/content/Heart';
import Info from '../components/content/Info';
import Detail from '../components/content/Detail';
//import SwiperFlipDiv from '../components/content/SwiperFlipDiv';
import { useParams } from 'react-router-dom';
import Image from '../components/content/Image';
import SwipeableEdgeDrawer from '../components/review/SwipeableEdgeDrawer';
import Title from '../components/content/Title';

export default function FundingContentDetail() {
    const { contentId } = useParams();
    const [openDrawer, setOpenDrawer] = useState(false); 

    const handleToggleDrawer = () => {
        console.log("handleToggleDrawer called"); 
        setOpenDrawer(!openDrawer);
    };

    return (
      <div style={{background: "white", overflowY:"auto"}}>
        <MenuBar/>
        <div style={{position: "relative", height: "800px"}}>
        <div style={{ 
        position:"absolute",
        top:"200px",
        background: "black", 
        zIndex: 1}}>
        </div>
        <div style={{ position: "absolute", top: "150px", left: "600px"}}>
        <Title contentId={contentId}/>
        </div>
        <div style={{ position: "absolute", top: "300px", left: "220px"}}>
        <Image style={{ width: "100px", height: "100px", objectFit: "cover" }}/>
        </div>
            {/* Adjusted Info's position */}
            <div style={{ position: "absolute", top: "280px", left: "930px"}}>
                <Info contentId={contentId} />
            </div>
            
            {/* Adjusted Heart's position */}
            <div style={{ position: "absolute", top: "85%", left: "920px", transform: "translateY(-50%)" }}>
                <Heart onJoinClick={handleToggleDrawer} /> 
            </div>
            <div>
                <SwipeableEdgeDrawer contentId={contentId} open={openDrawer} onClose={handleToggleDrawer}/> 

            </div>
          
        </div>
        <div>
        <Detail contentId={contentId} />
        </div>
        {/*
        <div style={{ position: "absolute", right: "50px", top: '200%', transform:'translateY(-50%)' }}>
              <Gift />
        </div>
        */}
      </div>
      
    );
}
