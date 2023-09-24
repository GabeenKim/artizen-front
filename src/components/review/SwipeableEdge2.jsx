import { Alert, Box, Button, Rating, Skeleton, Snackbar, SwipeableDrawer, TextField, Typography, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import ReviewBox from "./ReviewBox";
import { useEffect, useState } from "react";
import { addContentReviews, getContentReviews } from "../../api/funding";


const drawerBleeding = 56;

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
  }));

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

export default function SwipeableEdge({open, toggleDrawer, contentId}){
  const [reviewInfo, setReviewInfo] = useState();
  const [reviews, setReviews] = useState([]);

  useEffect(()=>{
    getContentReviews(contentId)
    .then((res)=>res.json())
    .then((res)=>{
      setReviewInfo(res.reviewInfo);
      setReviews(res.reviews);
      console.log("???")
    })
    .catch((e)=>console.log(e))

    // console.log(reviewInfo, reviews)
  }, [])

  return(
      <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      swipeAreaWidth={drawerBleeding}
      disableSwipeToOpen={false}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{width: '50%', height: '100%'}}
    >
      <StyledBox
        sx={{
          px: 2,
          pb: 2,
          height: '100%',
          overflow: 'auto',
        }}
      >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary' }}>{reviews.length} results</Typography>
          {/* <Skeleton variant="rectangular" height="50vh" /> */}
          <ReviewBox reviewInfo={reviewInfo} reviews={reviews}/>
          <div style={{display:'flex', justifyContent:'center', width:'100%', paddingTop:'10px'}}>
          {
            localStorage.getItem('userId') !== null ?
            <InputReviewDiv contentId={contentId}/> :
            <div>리뷰 작성은 사용자만 가능합니다</div>
          }
          {/* <InputReviewDiv contentId={contentId}/> */}
          </div>
      </StyledBox>
    </SwipeableDrawer>
  )
}


const InputReviewDiv = ({contentId}) => {
  const [value, setValue] = useState(0);
  const [reviewInput, setReviewInput] = useState('');
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState('');
  const [alertType, setAlertType] = useState('');

  const userId = localStorage.getItem('userId');

  const handleChange = (e) => {
    setReviewInput(e.target.value);
    console.log(reviewInput)
  }

  const handleClose = () => {
    setOpen((current)=>!current)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(value==0 || reviewInput.length==0){
      setAlert('점수와 리뷰를 모두 작성해주세요')
      setAlertType('warning')
      handleClose()
      return;
    }
    addContentReviews({userId:userId, contentId:contentId, review:reviewInput, score:value})
    .then((res)=>{
      if(res.status==200){
        setAlert('리뷰 작성이 완료되었습니다')
        setAlertType('success')
        setValue(0)
        setReviewInput('')
      }else{
        setAlert('리뷰 작성 중 에러가 발생했습니다')
        setAlertType('error')
      }
      handleClose();

    })
    .catch((e)=>console.log(e))
  };


  return(
    <>
    <form onSubmit={handleSubmit}>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />      
      <TextField id="filled-basic" label="리뷰 작성" variant="filled" onChange={handleChange} value={reviewInput} sx={{width:'60vw'}}/>
      <Button variant="contained" type="submit">제출</Button>
    </form>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={alertType} sx={{ width: '100%' }}>
        {alert}
      </Alert>
    </Snackbar>
    </>
  )
}