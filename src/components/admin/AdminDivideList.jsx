import React, { useState,useEffect } from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { DialogActions, DialogContent, DialogTitle } from "@mui/material"
import { inputOkList, inputFailList } from "../../api/admin";
import { getFundingUserByContentId } from "../../api/funding";

import DivideCard from "./DivideCard";
import DividePage from "./DividePage";


function AdminDivideList() {
    const [oks, setOks] = useState([]);
    const [fails, setFails] = useState([]);

    const [openOk, setOpenOk] = useState(false);
    const [openFail, setOpenFail] = useState(false);
    const [fundingUsers, setFundingUsers] = useState([]);

    const handleOkClose = () => setOpenOk(false);
    const handleFailClose = () => setOpenFail(false);

    useEffect(() => {
        inputOkList(setOks);
        inputFailList(setFails);
    }, [])

    const handleOpenWithOkUsers = (item) => {
        {/* 투자한 인원 불러오기*/}
        getFundingUserByContentId(item.contentId,setFundingUsers);
        {/* Modal Open */}
        setOpenOk(true);
    }

    const handleOpenWithFailUsers = (item) => {
        {/* 투자한 인원 불러오기*/}
        getFundingUserByContentId(item.contentId,setFundingUsers);
        {/* Modal Open */}
        setOpenFail(true);
    }
 
    return (
        <Box style={{ height:"100%"}}>
            <div style={{width:"50%", height:"100%"}}>
                <h2> 수익금 처리 </h2>
                <hr/>
                <div style={{display:"flex",  height:"100%"}}>
                    <div style={{width:"50%" }}>
                        <h4>수익금 분배 대상 프로젝트</h4>
                        {
                            oks.map((ok, index)=>{
                                return (
                                    <div key={index} style={{boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", marginTop:"50px"}}>
                                        <DivideCard item={ok} isCheck="ok"/>

                                        <div style={{display:"flex",justifyContent:"flex-end"}}>
                                            <Button variant="contained" color="success" size="large" 
                                            style={{marginRight:"25px", marginLeft:"25px", marginBottom:"25px"}} 
                                            onClick={(e) => {handleOpenWithOkUsers(ok)}}>
                                                수익금 분배
                                            </Button>

                                            <Modal
                                            keepMounted
                                            open={openOk}
                                            onClose={handleOkClose}
                                            aria-labelledby="keep-mounted-modal-title"
                                            aria-describedby="keep-mounted-modal-description"
                                            sx={{display:'flex', justifyContent:'center', marginTop:"50px", height:'80vh', zIndex:'50'}}
                                            >
                                                <DividePage isSuccess={true} contentId={ok.contentId} item={ok} setOks={setOks} oks={oks}/> 
                                            </Modal>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div style={{width:"50%"}}>
                        <h4>환불 대상 프로젝트</h4>
                        {
                            fails.map((fail, index)=>{
                                return (
                                    <div key={index} style={{boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", marginTop:"50px"}}>
                                        <DivideCard item={fail} isCheck="fail"/>

                                        <div style={{display:"flex",justifyContent:"flex-end"}}>
                                            <Button variant="contained" color="error" size="large" 
                                            style={{marginRight:"25px", marginLeft:"25px", marginBottom:"25px"}} 
                                            onClick={(e) => {handleOpenWithFailUsers(fail)}}>
                                                환불 처리
                                            </Button>

                                            <Modal
                                            keepMounted
                                            open={openFail}
                                            onClose={handleFailClose}
                                            aria-labelledby="keep-mounted-modal-title"
                                            aria-describedby="keep-mounted-modal-description"
                                            sx={{display:'flex', justifyContent:'center', marginTop:"50px", height:'80vh', zIndex:'50'}}
                                            >
                                                <DividePage isSuccess={false} contentId={fail.contentId} item={fail} setFails={setFails} fails={fails}/> 
                                            </Modal>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Box>
    )
}

const Box = styled.div`
    width: 100%;
    display: flex;
    justify-content : center;
    margin-left: 50px;
`;

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default AdminDivideList;