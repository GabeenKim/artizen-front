import React, { useEffect, useState } from "react";
import styled from "styled-components";

import TestImage from "../../image/test-img.jpg";
import { getWriterName } from '../../api/admin'

function CheckCard(props) {
    const [name, setName] = useState("");

    useEffect(()=>{
        try{
            getWriterName(setName, props.item.writerId);
        }catch(e){
            console.log(e);
        }
    },[])

    return (
        <Container>
            {/* 전시 정보 */}
            <img src={TestImage} alt="포스터" style={{padding:"10px"}}/>
            <Wrapper>
                <TitleText style={{marginTop:"55px"}}>
                        <div>
                        <h3>작품명 : {props.item.contentName}</h3> 
                        <h5>승인 요청일 : {new Date(props.item.startDay).toLocaleDateString()}</h5>
                        <h5>작가명 : {name}</h5>
                        
                        </div>
                </TitleText>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    margin: 35px 0;
    height: 20%;
    width: 100%;
`

const Wrapper = styled.div`
    width: 100%;
    height: 70px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-radius: 6px;
    cursor: pointer;
    margin-left: 40px;
`;

const TitleText = styled.div`
    font-size: 20px;
    font-weight: 500;
    
`;


export default CheckCard;