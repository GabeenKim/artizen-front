import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Swal from "sweetalert2";

import CheckCard  from "./CheckCard";
import { checkList } from '../../api/admin'
import { ok, fail } from '../../api/admin'
import { useNavigate } from "react-router-dom";

function AdminCheckList() {
    const [checks,setChecks] = useState([]);
    const navigate = useNavigate();
    const btnRef = useRef();

    useEffect(() => {
        checkList(setChecks);
    }, [])


    const handleGoDetail = () => {
        navigate(`/SupportContentDetail/${btnRef.current.id}`)
    }

    const handleOk = (item) => {
        Swal.fire({
        title: '승인 처리 하시겠습니까?',
        text: "다시 되돌릴 수 없습니다. 신중하세요.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'YES',
        cancelButtonText: 'NO',
        }).then((result) => {
            if (result.isConfirmed) {
                {/* 승인 처리 */}
                ok(item.contentId);

                {/* 상태 변경*/}
                setChecks(checks.filter(ticket => ticket.contentId !== item.contentId));
                
                Swal.fire(
                '승인이 완료되었습니다.',
                '',
                'success'
                )
            }
        })
    }

    const handleFail = (item) => {
        Swal.fire({
            title: '승인 거부 하시겠습니까?',
            text: "다시 되돌릴 수 없습니다. 신중하세요.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'YES',
            cancelButtonText: 'NO',
          }).then((result) => {
            if (result.isConfirmed) {
                {/* 승인 거부 처리 */}
                fail(item.contentId);

                {/* 상태 변경 */}
                setChecks(checks.filter(ticket => ticket.contentId !== item.contentId));

                Swal.fire(
                    '승인이 거부되었습니다.',
                    '',
                    'success'
                )
            }
          })
    }

    return (
        <Box>
            <div style={{width:"50%"}}>
                <h2> 승인 요청 목록 </h2>
                <hr/>
                {
                    checks.map((check)=>{
                        return (
                            <div key={check.contentId} style={{boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", marginTop:"50px"}}>
                                <CheckCard item={check}/>
                                
                                <div style={{display:"flex", justifyContent:"flex-end", padding:"20px"}}>
                                    <Button id={check.contentId} ref={btnRef} variant="contained" size="large" style={{marginRight:"25px"}} onClick={handleGoDetail}>
                                        상세보기
                                    </Button>
                                    <Button variant="contained" color="success" size="large" style={{marginRight:"25px"}} 
                                    onClick={() => handleOk(check)}>
                                        승인
                                    </Button>
                                    <Button variant="contained" color="error" size="large" 
                                    onClick={() => handleFail(check)}>
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
    padding-bottom: 100px;
    margin-left: 30px;
`;

export default AdminCheckList;