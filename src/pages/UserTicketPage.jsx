import React from 'react';
import styled from 'styled-components';
import TicketItem from '../components/TicketItem';
import { useEffect, useState } from 'react';
import { userList } from "../api/admin"
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import { DialogContent, Button, TextField } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Swal from "sweetalert2";
import { LastOuterContainer } from "../styles/BodyStyle";
import Gift from "../image/gift.png";
import QR from "../image/qr.png";
import BigQr from "../image/big-qr.png";
import StopWatch from "../image/stopwatch.png";
import User from "../image/user.png";

import { sendTicket } from "../api/update"
import Share from '../components/content/Share';

function UserTicket() {
    const [timer, setTimer] = useState(30);
    const [tickets, setTickets] = useState(""); {/* 나의 tickets 저장 */}
    const [userId, setUserId] = useState(localStorage.getItem('userId')); 
    const [users, setUsers] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:9999/ticket/${userId}`, {
            method : "GET"   
        }).then(res=>res.json())
        .then(res=>{
            const currentTickets = [];
            res.map((item) => currentTickets.push(item));
            let newArray = [...currentTickets];
            setTickets(newArray);
        });              

        console.log(tickets);
    }, []);
    
    useEffect(() => {
        try{
            userList(setUsers)
        }catch(e){
            console.log(e);
        }
    },[])

    {/* Gift 모달 */}
    const [isGiftModal, setIsGiftModal] = useState(false);

    const handleClickOpen = () => {
        setIsGiftModal(true);
      };
    
    const handleClose = () => {
        setIsGiftModal(false);
    };

    {/* 선물 보내기 */}
    const handleSendTicket = (sendUserId,receiveId,ticketId) => {
        Swal.fire({
            title: '선물을 보내시겠습니까?',
            text: "다시 되돌릴 수 없습니다. 신중하세요.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'YES',
            cancelButtonText: 'NO',
            }).then((result) => {
                if (result.isConfirmed) {
                    sendTicket({sendUserId, receiveId, ticketId});
                    setIsGiftModal(false);
                    setTickets(tickets.filter(ticket => ticket.TICKETID !== ticketId));
                    
                    Swal.fire(
                    '선물 보내기 완료!',
                    '',
                    'success'
                    )
                }
            })
    }

    {/* QR 모달 */}
    const [isQrModal, setIsQrModal] = useState(false);

    const handleQrModal = (e) => {    
        setIsQrModal(!isQrModal);
    }

    return (
            <Box>
            <div>
                <Title>
                    <h1> 티켓 목록
                        <span>지인에게 티켓 보내보세요!</span>
                    </h1>
                </Title>
                {tickets.length > 0 
                 ?tickets.map((ticket, index) => {
                    return (
                        <div style={{boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"}}>
                            <TicketItem
                                key={ticket.ticketId}
                                post={ticket}
                                users={users}
                            />

                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                <div>
                                        {/* Gift */}
                                <MyButton onClick={handleClickOpen}>
                                <Image src={Gift}/>
                                </MyButton>
                                
                                {/* Gift Modal */}
                                <Dialog open={isGiftModal} onClose={handleClose} fullWidth style={{zIndex:"10"}}>
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
                                    {users.map((user) => (
                                        user.USER_ID != localStorage.getItem('userId') ?
                                        <ListItem disableGutters key={user.USER_ID}>
                                            <ListItemButton>
                                                <Image src={User}/>
                                                    <ListItemText primary= {user.EMAIL} style={{marginLeft:"10px"}}/>
                                                    <Image src={Gift} onClick={()=>
                                                    handleSendTicket(localStorage.getItem("userId"), user.USER_ID, ticket.TICKETID)}
                                                    />
                                            </ListItemButton>
                                        </ListItem>
                                        : null
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
                                </div>
                                
                                <div>
                                     <Share ticket={ticket} style={{marginLeft:"50px"}}/>
                                </div>
                            </div>
                            
                        </div>
                    )
                })
                : <h2>보유 티켓 없음</h2>
                }
            </div>
        </Box>
    )
}

const BaseHeading = styled.h1`
  position: relative;
  padding: 0;
  margin: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  font-size: 25px;
  color: #080808;
  transition: all .4s ease;

   span {
    display: block;
    font-size:.5em; 
    line-height :1.3; 
   }

   em {
     font-style:normal; 
     font-weight :600; 
   }
`;

const Title = styled(BaseHeading)`
    text-transform: capitalize;

    &::before {
        position:absolute; 
        left :0; 
        bottom :0; 
        width :60px; 
        height :2px; 
        content :"";
        background-color:#c50000
    }

    & span {
      font-size :15px ;  
      font-weight :500 ;
      text-transform :uppercase ;
      letter-spacing :4px ;
      line-height :3em ;
      padding-left:.25em ;  
      color :rgba(0,0,0,.4) ;  
      padding-bottom :10px
}
`;

const Box = styled.div`
    width: 50%;
    margin-left: 560px;
`;

const Label = styled.div`
    font-size: 30px;
    font-weight: bold;
`;

const MyButton = styled.button`
    background-color: white;
    border: none;
    
    :hover {
        background: #0ea5e9;
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


export default UserTicket;