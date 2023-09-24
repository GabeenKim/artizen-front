import styled from "@emotion/styled"
import Investors from "./Investors"
import SuccessFunding from "./SuccessFunding"
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { useEffect, useState, useCallback } from "react";
import FailFunding from "./FailFunding";
import { okDivide, failDivide } from "../../api/funding";
import Swal from "sweetalert2";

export default function DivideCompo(props){
    const [open, setOpen] = useState(false);
    const isSuccess = props.isSuccess;

    const handleClickOpen = () => {
      setOpen(true);
      
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [openFail, setOpenFail] = useState(false);

    const handleClickFailOpen = () => {
        setOpenFail(true);
    };
  
    const handleFailClose = () => {
        setOpenFail(false);
    };

    const clickFailAgree = (contentId) => {
        setOpenFail(false);
    
        Swal.fire({
            title: '[재확인] 환불 처리 하시겠습니까?',
            text: "다시 되돌릴 수 없습니다. 신중하세요.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'YES',
            cancelButtonText: 'NO',
            }).then((result) => {
                if (result.isConfirmed) {
                    failDivide(contentId);
                    props.setFails(props.fails.filter(fail => fail.contentId !== contentId))

                    Swal.fire(
                    '환불 처리 완료!',
                    '',
                    'success'
                    )
                }
            })
    };

    {/* 수익 분배 */}
    const clickAgree = async (contentId) => {
       
        Swal.fire({
            title: '[재확인] 수익 분배 하시겠습니까?',
            text: "다시 되돌릴 수 없습니다. 신중하세요.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'YES',
            cancelButtonText: 'NO',
            }).then((result) => {
                if (result.isConfirmed) {
                    okDivide(contentId);
                    props.setOks(props.oks.filter(ok => ok.contentId !== contentId));
                
                    Swal.fire(
                    '수익 분배 완료!',
                    '',
                    'success'
                    )
                }
            })
    };

    return(
        <OuterContainer>
        <Container>
            <Investors isSuccess={isSuccess} contentId={props.contentId} />
            <>
                {
                    isSuccess ? <SuccessFunding item={props.item}/> : <FailFunding item={props.item} />
                }
            </>
        </Container>

        {
            isSuccess == true ? 
                <>
                {/* Modal */}
                <Button variant="contained" sx={{width: "30%", padding: "10px", marginTop:"3px"}} onClick={handleClickOpen}>수익 분배</Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    sx={{zIndex: "100"}}
                >
                    <DialogTitle id="alert-dialog-title">
                    {"확인"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            투자자 전원에게 일괄 분배를 진행합니다.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Disagree</Button>
                        <Button onClick={(e)=>clickAgree(props.contentId)}  
                            autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
                </>
            : 
             <>
                
                <Button variant="contained" color="error" sx={{width: "30%", padding: "10px"}} onClick={handleClickFailOpen}>환불</Button>
                
                <Dialog
                    open={openFail}
                    onClose={handleFailClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                    {"확인"}
                    </DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        투자자 전원에게 일괄 환불을 진행합니다.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleFailClose}>Disagree</Button>
                    <Button onClick={()=>clickFailAgree(props.contentId)} autoFocus>
                        Agree
                    </Button>
                    </DialogActions>
                </Dialog>
             </>
            
        }
        </OuterContainer>
    )
}

const Container = styled.div`
    display: flex;
    height: 70vh;
    width: 65vw;
`

const OuterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Wrap = styled.div`
    position: absolute;
    width: 50%;
    bottom: 10%;
`