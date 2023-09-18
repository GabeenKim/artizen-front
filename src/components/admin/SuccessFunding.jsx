import { Chip } from "@mui/material";
import { BarChart } from '@mui/x-charts/BarChart';
import { AxisConfig } from '@mui/x-charts';
import styled from "styled-components";
import { useEffect } from "react";
import Viewers from "./Viewers";

export default function SuccessFunding(data){
    // const data = {
    //     contentId : 1,
    //     contentSum : 4500000,
    //     target : 5000000,
    //     category : "영화",
    //     contentName : "메가로돈2",
    //     name: "김한민",
    //     datail : "지구 역사상 가장 거대한 최상위 포식자 ‘메가로돈’과 목숨 건…",
    //     startPeriod : "2023.09.05",
    //     endPeriod : "2023.10.05",
    //     likes : 33,
    //     writerId : 1234,
    //     transaction: 4500,
    //     productionCost: 100000000,
    //     purpose: "영화 홍보비 조달",
    //     minInvest: 50000,
    //     average: 844236,
    //     return: 300000,
    //     period: 30,
    //     returnRate:10
    // }

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
                <h2>{data.item.contentName}</h2>
                <Chip label={data.item.category} color="primary" variant="outlined" />
            </div>
            <p style={{margin:"0"}}></p>


            <InnerContainer>
            <div>
            <h2>투자 개요</h2>
            <Table>
                <tr><td>투자금 조달 목적</td><td>{data.item["fundingContents"].purpose}</td></tr>
                <tr><td>최소 투자 금액</td><td>{data.item["fundingContents"].minInvest}</td></tr>
                <tr><td>모집 기간</td><td>{data.item["fundingContents"].startPeriod} ~ {data.item["fundingContents"].endPeriod}</td></tr>
            </Table>
            </div>
            <div>
            <h2>투자 구조</h2>
            <table>
                <tr><td>총 예산 규모</td><td>{data.item["fundingContents"].productionCost}원</td></tr>
                <tr><td>객단가</td><td>{data.item["fundingContents"].transaction}원</td></tr>
                <tr><td>추정 손익분기점</td><td>{Math.ceil(data.item["fundingContents"].productionCost/data.item["fundingContents"].transaction)}명</td></tr>
            </table>
            </div>
            </InnerContainer>

            <BarChart
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
            />
            <h3>누적관객수</h3>
            <Viewers isSuccess={true} 
            success={{countString: '100만명', count: 10000000, evenPoint: 9000000, earning:10}}
            />
            <div style={{marginTop:"50px", display:"flex", flexDirection:"column", alignItems:"center", fontWeight:"bold"}}>
                <p>평균 {data.average}원 투자, {data.return}원을 돌려받을 것으로 추정됩니다.</p>
                <p>투자기간 {data.period}일 | <span style={{color:"red"}}>수익률 {data.returnRate}%</span></p>
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