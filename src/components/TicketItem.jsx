import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TestImage from "../image/test-img.jpg";

function TicketItem(props) {
    const { post, onClick } = props;
    
    {/* 날짜 변환 */}
    const start = new Date(post.STARTDAY);
    const end = new Date(post.ENDDAY);
    const startDay = start.getFullYear() + '.' + start.getMonth() + '.' + start.getDate();
    const endDay = end.getFullYear() + '.' + end.getMonth() + '.' + end.getDate();

    return (
        <Container>
            {/* 전시 정보 */}
            <img src={TestImage} alt="포스터"/>
            <Wrapper onClick={onClick}>
                <TitleText>
                    <div>
                        <h3> 작품명 : {post.CONTENTNAME}</h3>
                        <h4> 전시 기간 : {startDay} ~ {endDay}</h4>
                    </div>
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

export default TicketItem;