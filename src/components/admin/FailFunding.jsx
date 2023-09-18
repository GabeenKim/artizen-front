import { Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { BarChart } from '@mui/x-charts/BarChart';
import { AxisConfig } from '@mui/x-charts';
import styled from "styled-components";
import { useEffect, useState } from "react";
import Viewers from "./Viewers";

export default function FailFunding({data2}){


    const data = {
        contentId : 1,
        contentSum : 4500000,
        target : 5000000,
        category : "영화",
        contentName : "메가로돈2",
        name: "김한민",
        datail : "지구 역사상 가장 거대한 최상위 포식자 ‘메가로돈’과 목숨 건…",
        startPeriod : "2023.09.05",
        endPeriod : "2023.10.05",
        likes : 33,
        writerId : 1234,
        transaction: 4500,
        productionCost: 100000000,
        purpose: "영화 홍보비 조달",
        minInvest: 50000,
        average: 844236,
        return: 300000,
        period: 30,
        returnRate:10
    }

    const pData = [2400, 1398, -9800, 3908, 4800, -3800, 4300];

    const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
    ];


    // useEffect(()=>{
    //     console.log(process.env.REACT_APP_KOFIC_KEY)
    //     async function getMovie(){
    //         const res = await searchMovie();
    //         console.log(res);
    //     }
    //     getMovie();
    // }, [])
    return(
        <Container>
            <div style={{display:"flex"}}>
                <h2>{data.contentName}</h2>
                <Chip label={data.category} color="primary" variant="outlined" />
            </div>
            <p style={{margin:"0"}}>{data.name}</p>


            <InnerContainer>
            <div>
            <h2>투자 개요</h2>
            <Table>
                <tr><td>투자금 조달 목적</td><td>{data.purpose}</td></tr>
                <tr><td>최소 투자 금액</td><td>{data.minInvest}</td></tr>
                <tr style={{color:"red"}}><td>모집 기간</td><td>{data.startPeriod} ~ {data.endPeriod}</td></tr>
            </Table>
            </div>
            <div>
            <h2>투자 구조</h2>
            <table>
                <tr><td>총 예산 규모</td><td>{data.productionCost}원</td></tr>
                <tr><td>객단가</td><td>{data.transaction}원</td></tr>
                <tr><td>추정 손익분기점</td><td>{Math.ceil(data.productionCost/data.transaction)}명</td></tr>
            </table>
            </div>
            </InnerContainer>

            <Viewers isSuccess={false}
                fail={{target:20000000, sum:9000000}}
            />

            <div style={{marginTop:"50px", display:"flex", flexDirection:"column", alignItems:"center", fontWeight:"bold", width:"80%"}}>
                <p>온라인 소액공모 법령에 따라 모집 목표 금액의 80% 이상 투자금(청약대금)이 모이지 않아
                투자 실패로 처리되어 투자금액(청약금액)은 투자자의 예치금 계좌로 반환됩니다.</p>
            </div>
            
        </Container>
    );
}

const Container = styled.div`
    width: 70%;
    height: 100%;
    padding: 0px 30px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

const InnerContainer = styled.div`
    display: flex;
    margin: 30px 0px;
`

const Table = styled.table`
    margin-right: 30px;
`
