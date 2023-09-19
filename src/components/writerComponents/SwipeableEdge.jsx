import { Box, Rating, Skeleton, SwipeableDrawer, Typography, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import ReviewBox from "./ReviewBox";


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

export default function SwipeableEdge({open, toggleDrawer, writer, reviews}){
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
        sx={{width: '50%'}}
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
            <ReviewBox writer={writer} reviews={reviews}/>
        </StyledBox>
      </SwipeableDrawer>
    )
}