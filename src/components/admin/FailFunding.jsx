import { Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { BarChart } from '@mui/x-charts/BarChart';
import { AxisConfig } from '@mui/x-charts';
import styled from "styled-components";
import { useEffect, useState } from "react";
import Viewers from "./Viewers";

export default function FailFunding(props){
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

    const [startDay, setStartDay] = useState();
    const [endDay, setEndDay] = useState();
    const [diffDay, setDiffDay] = useState();

    useEffect(()=>{
    
        setStartDay(''.concat(new Date(props.item.startDay).getFullYear(), "-" , new Date(props.item.startDay).getMonth(), "-", new Date(props.item.startDay).getDay()));
        setEndDay(''.concat(new Date(props.item.endDay).getFullYear(), "-" , new Date(props.item.endDay).getMonth(), "-", new Date(props.item.endDay).getDay()));
        
        const t1 = new Date(startDay);
        const t2 = new Date(endDay);
        const today = new Date();

        let diff = Math.abs(today.getTime() - t1.getTime());
        diff = Math.ceil(diff / (1000 * 60 * 60 * 24));
        setDiffDay(diff);
    }, [])
    return(
        <Container>

            <div style={{display:"flex"}}>
                <h2><b>{props.item.contentName}</b></h2>
                <Chip label={props.item.category} color="primary" variant="outlined" />
            </div>
            <p style={{margin:"0"}}>{props.item.name}</p>


            <InnerContainer style={{padding:"10px"}}>
            <div style={{padding:"10px"}}>
                <h2><b>투자 개요</b></h2>
                <Table>
                    <tr><td>투자금 조달 목적</td><td style={{textAlign:"right"}}>{props.item.fundingContents.purpose}</td></tr>
                    <tr><td>최소 투자 금액</td><td style={{textAlign:"right"}}>{parseInt(props.item.fundingContents.minInvest).toLocaleString()}원</td></tr>
                    <tr style={{color:"red"}}><td style={{textAlign:"left"}}><b>모집 기간</b></td><td>{startDay} ~ {endDay}</td></tr>
                </Table>
            </div>
            <div style={{padding:"10px"}}>
            <h2><b>투자 구조</b></h2>
            <table>
                <tr><td>총 예산 규모</td><td style={{textAlign:"right"}}>{parseInt(props.item.fundingContents.productionCost).toLocaleString()}원</td></tr>
                <tr><td>객단가</td><td style={{textAlign:"right"}}>{parseInt(props.item.fundingContents.transaction).toLocaleString()}원</td></tr>
                <tr><td>추정 손익분기점</td><td style={{textAlign:"right"}}>{Math.ceil(props.item.fundingContents.productionCost/props.item.fundingContents.transaction)}명</td></tr>
            </table>
            </div>
            </InnerContainer>

            <Viewers isSuccess={false}
                fail={{target:props.item.target, sum:props.item.contentSum}}
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
