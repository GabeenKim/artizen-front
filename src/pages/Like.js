import React, { useEffect, useState } from 'react';
import MenuBar from "../components/MenuBar";
import Gift from '../components/content/Gift';
import Heart from '../components/content/Heart';
import Info from '../components/content/Info';
import Detail from '../components/content/Detail';
//import SwiperFlipDiv from '../components/content/SwiperFlipDiv';
import { useParams } from 'react-router-dom';
import Image from '../components/content/Image';
import SwipeableEdgeDrawer from '../components/review/SwipeableEdgeDrawer';
import SwipeableEdge from '../components/review/SwipeableEdge2';
import styled from 'styled-components';
import LikeCompo from '../components/review/LikeCompo';

export default function Like() {
    

    return (
      <div>
          <div style={{marginLeft:"550px", marginTop:"5px"}}>
          <Title>
              <h1>찜 목록
                  <span>찜한 프로젝트를 볼 수 있어요!</span>
              </h1>
          </Title>
          </div>
          <div style={{display:"flex", justifyContent:"center"}}>
            <LikeCompo/>
          </div>
       </div> 
      );
}

const BaseHeading = styled.h1`
  position: relative;
  padding: 0;
  margin: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 30px;
  color: #080808;
  transition: all .4s ease;

   span {
    display: block;
    font-size:.5em; 
    line-height :1.3; 
   }

   em {
     font-style:normal; 
     font-weight :600; 
   }
`;

const Title = styled(BaseHeading)`
    text-transform: capitalize;

    &::before {
        position:absolute; 
        left :0; 
        bottom :0; 
        width :60px; 
        height :2px; 
        content :"";
        background-color:#c50000
    }

    & span {
      font-size :13px ;  
      font-weight :500 ;
      text-transform :uppercase ;
      letter-spacing :4px ;
      line-height :3em ;
      padding-left:.25em ;  
      color :rgba(0,0,0,.4) ;  
      padding-bottom :10px
}
`;