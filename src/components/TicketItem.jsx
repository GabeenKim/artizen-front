import React, { useState, useEffect } from "react";
import styled from "styled-components";

function TicketItem(props) {
    const { post, onClick } = props;
    
    {/* 날짜 변환 */}
    const start = new Date(post.STARTDAY);
    const end = new Date(post.ENDDAY);
    const startDay = start.getFullYear() + '.' + start.getMonth() + '.' + start.getDate();
    const endDay = end.getFullYear() + '.' + end.getMonth() + '.' + end.getDate();

    useEffect(()=>{
        console.log(props.IMAGE_URL);
    },[])


    return (
        <Container>
            {/* 전시 정보 */}
            <div style={{display:'flex', alignItems:'center'}}>
            <img src={post.IMAGE_URL} alt="포스터" style={{width: '100px', height:'100px', objectFit:'contain'}}/>
            </div>
            <Wrapper onClick={onClick}>
                <TitleText>
                    <DIV>
                        <p className="title"> 작품명 : {post.CONTENTNAME}</p>
                        <p className="time"> 전시 기간 : {startDay} ~ {endDay}</p>
                    </DIV>
                </TitleText>
            </Wrapper>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    margin: 35px 0;
    height: 20%;
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

const DIV = styled.div`
    .title{
        font-size: 20px;
        font-weight: bold;
    }
    .time{
        font-size: 15px;
    }
`

export default TicketItem;