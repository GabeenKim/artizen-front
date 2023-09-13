import React from "react";
import styled from 'styled-components';
import SwiperMultipleDiv from '../components/SwiperMultipleDiv';
import { dummyData } from '../assets/dummyData';

function UserFundingPage() {

    return (
        <Box>            
            <div>
                <b>[ {localStorage.getItem("name")} ]님의 펀딩 중인 프로젝트 </b>
            </div>
       
            <div style={{width:"50%"}}>
                <SwiperMultipleDiv data={dummyData}/>
            </div>
        </Box>
    );
}

const Box = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 55px;
`;

export default UserFundingPage;