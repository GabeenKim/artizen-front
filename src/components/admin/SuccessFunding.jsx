import { Chip } from "@mui/material";
import { BarChart } from '@mui/x-charts/BarChart';
import { AxisConfig } from '@mui/x-charts';
import styled from "styled-components";
import { useEffect, useState } from "react";
import Viewers from "./Viewers";
import TestImage from "../../image/test-img.jpg";
import { getFundingUserByContentId } from "../../api/funding";

export default function SuccessFunding(data){
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
    const [items, setItems] = useState([]);

    useEffect(()=>{
        setStartDay(''.concat(new Date(data.item.startDay).getFullYear(), "-" , new Date(data.item.startDay).getMonth(), "-", new Date(data.item.startDay).getDay()+1));
        setEndDay(''.concat(new Date(data.item.endDay).getFullYear(), "-" , new Date(data.item.endDay).getMonth(), "-", new Date(data.item.endDay).getDay()+1));
        
        const t1 = new Date(startDay);
        const t2 = new Date(endDay);
        const today = new Date();

        let diff = Math.abs(today.getTime() - t1.getTime());
        diff = Math.ceil(diff / (1000 * 60 * 60 * 24));

        setDiffDay(diff);

        getFundingUserByContentId(data.item.contentId, setItems);
    }, [])

    return(
        <Container>
            <div style={{display:"flex"}}>
                <h1>{data.item.contentName}</h1>
                <Chip label={data.item.category} color="primary" variant="outlined" />
            </div>
            <p style={{margin:"0"}}></p>
            <InnerContainer>
                <div style={{padding:"5px"}}>
                    <h2><b>투자 개요</b></h2>
                    <Table>
                        <tr><TD><b>투자금 조달 목적</b></TD><td>{data.item["fundingContents"].purpose}</td></tr>
                        <tr><TD><b>최소 투자 금액</b></TD><td>{parseInt(data.item["fundingContents"].minInvest).toLocaleString()}</td></tr>
                        <tr><TD><b>상환 방법</b></TD><td>만기일시상환</td></tr>
                        <tr><TD><b>모집 기간</b></TD><td>{startDay} ~ {endDay}</td></tr>
                    </Table>
                </div>
            </InnerContainer>
            <InnerContainer>
                <div style={{padding:"5px"}}>
                    <h2><b>투자 구조</b></h2>
                    <Table>
                        <tr><TD><b>총 예산 규모</b></TD><td style={{textAlign:"right"}}>{parseInt(data.item["fundingContents"].productionCost).toLocaleString()}원</td></tr>
                        <tr><TD><b>객단가</b></TD><td style={{textAlign:"right"}}>{parseInt(data.item["fundingContents"].transaction).toLocaleString()}원</td></tr>
                        <tr><TD><b>추정 손익분기점</b></TD><td style={{textAlign:"right"}}>{parseInt(Math.ceil(data.item["fundingContents"].productionCost/data.item["fundingContents"].transaction)).toLocaleString()}명</td></tr>
                    </Table>
                </div>
            </InnerContainer>
            {/* <BarChart
            width={500}
            height={300}
            series={[
                {
                data: pData,
                label: 'pv',
                },
            ]}
            xAxis={[
                {
                data: xLabels,
                scaleType: 'band',
                disableLine: true,
                disableTicks: true,
                },
            ]}
            yAxis={[{ max: 10000 }]}
            /> */}
            <h2><b>누적관객수</b></h2>
            <Viewers isSuccess={true} 
            success={{countString: '10만명', count: 10050000, evenPoint: 10000000, earning:10}}
            />
            <div style={{marginTop:"50px", display:"flex", flexDirection:"column", alignItems:"center", fontWeight:"bold"}}>
                <p>평균 {Math.ceil(data.item.contentSum / items.length).toLocaleString()}원 투자, {parseInt(data.item.contentSum).toLocaleString()}원을 돌려받을 것으로 추정됩니다.</p>
                <p>투자기간 {diffDay}일 | <span style={{color:"red"}}>수익률 3.8%</span></p>
            </div>
        </Container>
    );
}

const Container = styled.div`
    width: 70%;
    height: 100%;
    padding: 0px 30px;
    overflow: auto;
`

const InnerContainer = styled.div`
    display: flex;
    margin: 30px 0px;
`

const Table = styled.table`
    margin-right: 30px;
`

const TD = styled.td`
    width: 150px;
`

const TR = styled.tr`
    height: 50px;
`