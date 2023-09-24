import React from "react";
import styled from 'styled-components';
import SwiperMultipleDiv from '../components/SwiperMultipleDiv';
import { dummyData } from '../assets/dummyData';
import RecipeReviewCard from '../components/RecipeReviewCard';
import Basicbar  from '../components/statistics/BasicBarChart';
import BasicPie from "../components/statistics/BasicPieChart";
import { useEffect, useState } from "react";
import { successFunding, showAllFundingContents } from "../api/funding";
import { useThemeProps } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { getWriterContents } from "../api/writer";

function WriterFundingPage() {
    const [fundings, setFundings] = useState([]); 
    const [contents, setContents] = useState([]);
    const [endContents, setEndContents]= useState([]);

    useEffect(()=>{
        if(Object.keys(localStorage).includes('userId'))
            successFunding(setFundings, localStorage.getItem('userId'));


        getWriterContents(localStorage.getItem('writerId'))
        .then((res)=>res.json())
        .then((res)=>{
            setContents(res)
        })
        .catch((e)=>console.error(e))

        //showEndedContents
        showAllFundingContents()
        .then((res)=>res.json())
        .then((res)=>setEndContents(res));

    },[]);
    
    return (
        <Box style={{marginLeft:"200px"}}>            
            <div style={{width:"70%"}}>
            {/* 수익률 통계 */}
                <Title>
                <h1>{localStorage.getItem("name")} 님을 위한 대쉬보드
                    <span>간단한 통계 자료를 볼 수 있어요!</span>
                </h1>
                </Title>
            
                <div style={{marginTop:"100px"}}>
                    <StaticsBox>
                        <div style={{display:"flex", justifyContent:"space-evenly", justifyDirection:"column"}}>
                            <StaticsItem>
                                <div style={{display:"flex",justifyContent:"flex-start", justifyDirection:"column", alignItems:"center"}}>
                                     <Avatar style={{background:"#f50057"}}>M</Avatar><b><span style={{marginLeft:"10px"}}>이번달 수익금</span></b>
                                </div>
                                <p style={{fontSize:"30px"}}>53,000 원</p>
                                <p><span style={{color:"#dc2626"}}><b style={{color:"#dc2626"}}>↑</b>12%</span>  지난달 대비 수익 증가률</p>
                            </StaticsItem>
                            <StaticsItem>
                                <div style={{display:"flex",justifyContent:"flex-start", justifyDirection:"column", alignItems:"center"}}>
                                     <Avatar style={{background:"#ff5252"}}>T</Avatar> <b><span style={{marginLeft:"10px"}}>현재 총 자산</span></b> 
                                </div>
                                <p style={{fontSize:"30px"}}>{parseInt(localStorage.getItem("balance")).toLocaleString()} 원 </p>
                                <p><span style={{color:"#009688"}}><b style={{color:"#009688"}}>↑</b>22%</span>  지난달 대비 총 자산 증가률</p>
                            </StaticsItem>
                            <StaticsItem>
                                <div style={{display:"flex",justifyContent:"flex-start", justifyDirection:"column",  alignItems:"center"}}>
                                    <Avatar style={{background:"#01579b"}}>I</Avatar><b><span style={{marginLeft:"10px"}}>진행 중인 프로젝트</span></b>
                                </div>
                                <p style={{fontSize:"30px"}}>{contents.length} 개</p>
                            </StaticsItem>
                        </div>
                    </StaticsBox>
                    <ChartBox style={{marginTop:"50px", display:"flex", justifyContent:"center"}}>
                        <FundingItem style={{marginLeft:"150px", fontWeight:"bold"}}>
                            <div>
                                <div style={{display:"flex", flexDirection:"row"}}>
                                    <div style={{boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"}}>
                                        <p style={{textAlign:"center", fontSize:"20px"}}>월별 수익률</p>
                                        <Basicbar item={[10,20,30]}/>
                                    </div>
                                </div>
                            </div>
                        </FundingItem>
                    </ChartBox>    
                </div>

                <div style={{marginTop:"150px"}}></div>
                <Title>
                    <h1>현재 진행 중인 프로젝트
                        <span>현재 진행중인 프로젝트를 볼 수 있어요!</span>
                    </h1>
                </Title>
                <SwiperMultipleDiv data={contents}/>


                <div style={{marginTop:"150px"}}></div>

                {/* <Title>
                    <h1>완료된 프로젝트
                        <span>완료된 프로젝트를 볼 수 있어요!</span>
                    </h1>
                </Title>
                <FundingBox style={{display:"flex",justifyContent:"space-around"}}>
                        
                        <FundingItemBox>
                            <div>
                                <Title>
                                     <p style={{textAlign:"center", fontSize:"25px"}}><b> 손익분기점 달성 펀딩 목록 </b></p>
                                </Title>
                                      
                                    {endContents.length > 0  ?
                                        endContents.map((endContent, index) => {
                                            return (
                                                <FundingItem key={index}>
                                                    <RecipeReviewCard 
                                                        contentName={endContent.contentName}
                                                        colorNum="500"
                                                        isSuccess="S"
                                                        percent={Math.round((endContent.contentSum / endContent.target) * 100)}
                                                        start={new Date(endContent.startDay).getUTCFullYear().toString() + "-" +
                                                            new Date(endContent.startDay).getUTCMonth().toString() + "-" +
                                                            new Date(endContent.startDay).getUTCDate().toString()}
                                                        end={new Date(endContent.endDay).getUTCFullYear().toString() + "-" +
                                                        new Date(endContent.endDay).getUTCMonth().toString() + "-" +
                                                        new Date(endContent.endDay).getUTCDate().toString()}
                                                        likes={endContent.likes}
                                                        category={endContent.category}
                                                        contentSum={endContent.contentSum}
                                                        image={endContent.image[0].imageUrl}
                                                        />
                                                </FundingItem>  
                                            )
                                        })
                                        : <h2>펀딩 목록 없음</h2> 
                                    }                           
                            </div>
                        </FundingItemBox>
                                
                        <FundingItemBox>
                        <div>
                                <Title>
                                     <p style={{textAlign:"center", fontSize:"25px"}}><b> 목표 미달성 펀딩 목록 </b></p>
                                </Title>
                                      
                                    {endContents.length > 0  ?
                                        endContents.map((endContent, index) => {
                                            return (
                                                <FundingItem key={index}>
                                                    <RecipeReviewCard 
                                                        contentName={endContent.contentName}
                                                        colorNum="500"
                                                        isSuccess="S"
                                                        percent={Math.round((endContent.contentSum / endContent.target) * 100)}
                                                        start={new Date(endContent.startDay).getUTCFullYear().toString() + "-" +
                                                            new Date(endContent.startDay).getUTCMonth().toString() + "-" +
                                                            new Date(endContent.startDay).getUTCDate().toString()}
                                                        end={new Date(endContent.endDay).getUTCFullYear().toString() + "-" +
                                                        new Date(endContent.endDay).getUTCMonth().toString() + "-" +
                                                        new Date(endContent.endDay).getUTCDate().toString()}
                                                        likes={endContent.likes}
                                                        category={endContent.category}
                                                        contentSum={endContent.contentSum}
                                                        image={endContent.image[0].imageUrl}
                                                        />
                                                </FundingItem>  
                                            )
                                        })
                                        : <h2>펀딩 목록 없음</h2> 
                                    }                           
                            </div>
                        </FundingItemBox>
                </FundingBox> */}
            </div>
        </Box>
    );
}

const Box = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-left: 150px;
`;

const Label = styled.div`
    font-size: 30px;
    font-weight: bold;
`;

const FundingBox = styled.div`
    display: flex;
    margin-top: 100px;
    margin-left: 40px;
`

const FundingItemBox = styled.div`
    display:flex;
    height: 100%;
    margin-top: 30px;
    margin-left: 80px;
`

const FundingItem = styled.div`
    display:flex;
    margin-top:60px;
`
const ChartBox = styled.div`
    display: flex;
    flex-direction: row;
    
`
const StaticsBox = styled.div`
    
`

const StaticsItem = styled.div`
    border-radius: 5px;
    width: 20%;
    padding: 20px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`

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


export default WriterFundingPage;