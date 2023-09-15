import React from "react";
import styled from 'styled-components';
import SwiperMultipleDiv from '../components/SwiperMultipleDiv';
import { dummyData } from '../assets/dummyData';
import RecipeReviewCard from '../components/RecipeReviewCard';
import Basicbar  from '../components/statistics/BasicBarChart';
import BasicPie from "../components/statistics/BasicPieChart";
import { useEffect, useState } from "react";
import { successFunding } from "../api/funding";
import { useThemeProps } from "@mui/material";
import Avatar from '@mui/material/Avatar';

function UserFundingPage() {
    const [fundings, setFundings] = useState([]); 
    
    useEffect(()=>{
        if(Object.keys(localStorage).includes('userId'))
            successFunding(setFundings, localStorage.getItem('userId'));
    },[]);
    

    return (
        <Box>            
            <div style={{width:"70%"}}>
            {/* 수익률 통계 */}
            <h2 style={{textAlign:"center", marginTop:"100px"}}> {localStorage.getItem("name")} 님을 위한 대쉬보드</h2>
                <div style={{marginTop:"100px"}}>
                    <StaticsBox>
                        <div style={{display:"flex", justifyContent:"space-evenly", justifyDirection:"column"}}>
                            <StaticsItem>
                                <div style={{display:"flex",justifyContent:"flex-start", justifyDirection:"column", alignItems:"center"}}>
                                     <Avatar style={{background:"#f50057"}}>M</Avatar><b><span style={{marginLeft:"10px"}}>수익금</span></b>
                                </div>
                                <p style={{fontSize:"30px"}}>53,000 원</p>
                                <p><span style={{color:"#dc2626"}}><b style={{color:"#dc2626"}}>↑</b>12%</span>  지난달 대비 수익 증가률</p>
                            </StaticsItem>
                            <StaticsItem>
                                <div style={{display:"flex",justifyContent:"flex-start", justifyDirection:"column", alignItems:"center"}}>
                                     <Avatar style={{background:"#ff5252"}}>T</Avatar> <b><span style={{marginLeft:"10px"}}>현재 총 자산</span></b> 
                                </div>
                                <p style={{fontSize:"30px"}}>100,000 원</p>
                                <p><span style={{color:"#009688"}}><b style={{color:"#009688"}}>↑</b>22%</span>  지난달 대비 총 자산 증가률</p>
                            </StaticsItem>
                            <StaticsItem>
                                <div style={{display:"flex",justifyContent:"flex-start", justifyDirection:"column",  alignItems:"center"}}>
                                    <Avatar style={{background:"#01579b"}}>I</Avatar><b><span style={{marginLeft:"10px"}}>진행 중인 프로젝트</span></b>
                                </div>
                                <p style={{fontSize:"30px"}}>4 개</p>
                            </StaticsItem>
                        </div>
                    </StaticsBox>
                    <ChartBox style={{marginTop:"50px", display:"flex", justifyContent:"center"}}>
                        <FundingItem style={{marginLeft:"150px", fontWeight:"bold"}}>
                            <div>
                                <div style={{display:"flex", flexDirection:"row"}}>
                                    <div style={{boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"}}>
                                        <p style={{textAlign:"center", fontSize:"20px"}}>월별 수익률</p>
                                        <Basicbar/>
                                    </div>
                                    <div style={{boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", marginLeft: "100px"}}>
                                        <p style={{textAlign:"center", fontSize:"20px"}}>분야별 수익률</p>
                                        <BasicPie/>  
                                    </div>
                                </div>
                            </div>
                        </FundingItem>
                    </ChartBox>    
                </div>

                <h2 style={{textAlign:"center", marginTop:"100px"}}> {localStorage.getItem("name")} 님이 진행 중인 프로젝트</h2>
                <SwiperMultipleDiv data={dummyData}/>
                <FundingBox style={{display:"flex",justifyContent:"space-evenly"}}>
                        
                        <FundingItemBox>
                            <div>
                                <p style={{textAlign:"center", fontSize:"20px"}}><b> 손익분기점 달성 펀딩 목록 </b></p>
                                    {fundings.length > 0  ?
                                        fundings.map((funding, index) => {
                                            return (
                                                <FundingItem>
                                                    <RecipeReviewCard 
                                                        contentName={funding.contentName}
                                                        colorNum="500"
                                                        isSuccess="S"
                                                        percent={Math.round((funding.contentSum / funding.target) * 100)}
                                                        start={new Date(funding.startDay).getUTCFullYear().toString() + "-" +
                                                            new Date(funding.startDay).getUTCMonth().toString() + "-" +
                                                            new Date(funding.startDay).getUTCDate().toString()}
                                                        end={new Date(funding.endDay).getUTCFullYear().toString() + "-" +
                                                        new Date(funding.endDay).getUTCMonth().toString() + "-" +
                                                        new Date(funding.endDay).getUTCDate().toString()}
                                                        likes={funding.likes}
                                                        category={funding.category}
                                                        contentSum={funding.contentSum}
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
                                <p style={{textAlign:"center", fontSize:"20px"}}><b> 목표 미달성 펀딩 목록 </b></p>
                                <div>
                                    <FundingItem>
                                        <RecipeReviewCard/>
                                    </FundingItem>
                                    <FundingItem>
                                        <RecipeReviewCard/>
                                    </FundingItem>
                                </div>
                            </div>
                        </FundingItemBox>
                        
                </FundingBox>
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

export default UserFundingPage;