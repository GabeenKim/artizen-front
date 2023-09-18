import styled from "styled-components"

export default function Viewers({isSuccess, success, fail}){
    return(
        <>
        <div style={{display:"flex", justifyContent:"space-between", width:"75%"}}>
            {
                isSuccess ?
                <><span>{success.countString}</span><span>수익률 약 {success.earning}%</span></>
                :
                <><span style={{color:"red"}}>모집 금액 | {fail.sum}</span><span style={{color:"red"}}>목표 {fail.target}</span></>
            }
        </div>
        <GraphBody>
            {
                isSuccess ?
                <>
                    <EvenPoint percent={success.evenPoint/15000000*100}>
                    <p>손익분기점 {success.evenPoint}명</p>
                    </EvenPoint>
                    <Graph percent={success.count/15000000*100}/>
                </>
                :
                <>
                    <Graph percent={fail.sum/fail.target*100}/>
                </>
            }
            
        </GraphBody>
        </>
    )
}

const GraphBody = styled.div`
    position: relative;
    width: 75%;
    height: 30px;
    border-width: 1px;
    border-style: solid;
    border-radius: 10px;
    border-color: #e5e7eb;
    display: flex;
    align-items: center;
`
const EvenPoint = styled.div`
    position: absolute;
    width: ${(props)=>props.percent||'1'}%;
    height: 30px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 2px;
    background-color: #e5e7eb;
    display: flex;
    justify-content: flex-end;
    p{
        margin-top: 30px;
    }
`

const Graph = styled.div`
    position: absolute;
    width: ${(props)=>props.percent||'1'}%;
    height: 90%;
    background-color: #cbd5e1;
    border-radius: 10px;
    // border-top-right-radius: 10px;
    // border-bottom-right-radius: 10px;
`