import React, { useEffect, useState } from "react";
import styled from "styled-components";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import CheckCard  from "./CheckCard";
import { checkList } from '../../api/admin'

function AdminCheckList() {
    const [checks,setChecks] = useState([]);

    useEffect(() => {
        checkList(setChecks);
    }, [])


    const handleGoDetail = () => {

    }

    const handleOk = () => {
        alert("ok")
    }

    const handleFail = () => {
        alert("fail")
    }

    return (
        <Box>
            <div style={{width:"50%"}}>
                <h2> 승인 요청 목록 </h2>
                <hr/>
                {
                    checks.map((check)=>{
                        return (
                            <div style={{boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", marginTop:"50px"}}>
                                <CheckCard item={check}/>
                                
                                <div style={{display:"flex", justifyContent:"flex-end", padding:"20px"}}>
                                    <Button variant="contained" size="large" style={{marginRight:"25px"}} onClick={handleGoDetail}>
                                        상세보기
                                    </Button>
                                    <Button variant="contained" color="success" size="large" style={{marginRight:"25px"}} onClick={handleOk}>
                                        승인
                                    </Button>
                                    <Button variant="contained" color="error" size="large" onClick={handleFail}>
                                        거부
                                    </Button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </Box>
    )
}

const Box = styled.div`
    width: 100%;
    display: flex;
    justify-content : center;
`;

export default AdminCheckList;