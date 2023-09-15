import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import { DialogContent, Button, TextField } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import ListItemAvatar from '@mui/material/ListItemAvatar';

import Gift from "../image/gift.png";
import QR from "../image/qr.png";
import BigQr from "../image/big-qr.png";
import StopWatch from "../image/stopwatch.png";
import TestImage from "../image/test-img.jpg";
import User from "../image/user.png";

{/* Test Email */}
const emails = ['user01@gmail.com', 'user02@gmail.com', 'user03@gmail.com', 'user04@gmail.com'];

function TicketItem(props) {
    const { post, onClick } = props;
    const [timer, setTimer] = useState(30);

    {/* 날짜 변환 */}
    const start = new Date(post.STARTDAY);
    const end = new Date(post.ENDDAY);
    const startDay = start.getFullYear() + '-' + start.getMonth() + '-' + start.getDate();
    const endDay = end.getFullYear() + '-' + end.getMonth() + '-' + end.getDate();

    {/* QR 모달 */}
    const [isQrModal, setIsQrModal] = useState(false);

    const handleQrModal = (e) => {    
        setIsQrModal(!isQrModal);
    }

    {/* Gift 모달 */}
    const [isGiftModal, setIsGiftModal] = useState(false);

    const handleClickOpen = () => {
        setIsGiftModal(true);
      };
    
    const handleClose = () => {
        setIsGiftModal(false);
    };

    const handleSendTicket = () => {
        window.confirm("선물을 보내시겠습니까?");
    }

    return (
        <Container>
            {/* 전시 정보 */}
            <img src={TestImage} alt="포스터"/>
            <Wrapper onClick={onClick}>
                <TitleText>
                    <div>
                        <p>{post.CONTENTNAME}</p>
                        <p> 전시 기간 : {startDay} ~ {endDay}</p>
                    </div>
                </TitleText>
            </Wrapper>
            {/* Gift Button */}
            <MyButton onClick={handleClickOpen}>
                <Image src={Gift}/>
            </MyButton>
            {/* Gift Modal */}
            <Dialog open={isGiftModal} onClose={handleClose} fullWidth>
                <DialogTitle style={{display:"flex", justifyContent:"center", alignContent: "center", fontWeight: "bold"}}>티켓 선물하기</DialogTitle>
                <br></br>
            
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="지인의 이메일을 입력해주세요."
                    type="email"
                    fullWidth
                    variant="standard"
                />

                {/* 유저 리스트 */}
                {emails.map((email) => (
                    <ListItem disableGutters key={email}>
                        <ListItemButton>
                            <Image src={User}/>
                            <ListItemText primary={email} style={{marginLeft:"10px"}}/>
                            <Image src={Gift} onClick={handleSendTicket}/>
                        </ListItemButton>
                    </ListItem>
                ))}
                    
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={handleClose}>닫기</Button>
                </DialogActions>
            </Dialog>
            
            {/* QR Button */}
            <MyButton onClick={handleQrModal}>
                <Image src={QR}/>
            </MyButton>
            {/* Qr Modal */}
            <Dialog open={isQrModal} onClose={handleQrModal} fullWidth>
                <DialogTitle style={{display:"flex", justifyContent:"center", alignContent: "center", fontWeight: "bold"}}>입장을 위한 QR코드</DialogTitle>
                <br></br>
                <div style={{display:"flex", justifyContent:"center", alignContent: "center"}}>
                <BigImage src={BigQr} />
                </div>
                <DialogContent style={{display:"flex", justifyContent:"center", alignContent: "center", marginTop: "25px"}}>
                    <Image src={StopWatch}/>
                    남은 시간 : {timer}
                </DialogContent>
                <p style={{display:"flex", justifyContent:"center", alignContent: "center", marginTop: "25px"}}>바로 입장 가능 QR 티켓입니다. 카운터에 해당 화면을 제시하여주세요.</p>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={handleQrModal}>닫기</Button>
                </DialogActions>
            </Dialog>
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
    height: 90px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-radius: 6px;
    cursor: pointer;
    background: white;
    border: 3.5px solid #e0e7ff;
    :hover {
        background: #e0e7ff;
    }
`;

const TitleText = styled.div`
    font-size: 20px;
    font-weight: 500;
    
`;

const MyButton = styled.button`
    background-color: white;
    border: none;
    
    :hover {
        background: #e0e7ff;
    }
`;

const Image = styled.img`

`;

const BigImage = styled.img`
    width: 50%;
    
`;

const Search = styled.form`
    display: flex;
    justify-content: center;
    z-index: 9;
    margin-bottom: 5px;

    select{
        border-radius: 8px; 
        width: 5%;
    }
    input{
        width: 30%;
        margin: 0px 10px;
        padding:10px;
        border-radius: 8px; 
    }
    button{
        border-width:0px;
        background-color: transparent;
    }
    img{
        width:20px;
    }
`

export default TicketItem;