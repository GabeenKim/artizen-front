import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Support from '../../components/content/Support';


function SwipeableEdgeDrawer({ open, onClose, window, contentId }) {
    // This is used only for the example
    const container = window !== undefined ? () => window().document.body : undefined;

    const [data, setData] = useState(null);
    const [price, setPrice] = useState(null);
    const storedUserId = localStorage.getItem('userId');
    

    const [expandedGift, setExpandedGift] = useState(null); 

    const handleSupportClick = () => {
        fetch('http://localhost:8080/funding/addFunding', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            price: price,
            contentId: contentId,
            userId: storedUserId
          }),
        })
        .then(response => response.json())
        .then(data => {
          console.log("Response:", data);
          // TODO: 추가로 후 처리가 필요한 경우 여기에 코드를 추가합니다.
        })
        .catch(error => {
          console.error("Error:", error);
        });
      };

    const handleGiftClick = (index) => {
        if (expandedGift === index) {
            setExpandedGift(null);
        } else {
            setExpandedGift(index);
        }
    };

    const drawerBleeding = 56;

    const Root = styled('div')(({ theme }) => ({
        height: '100%',
        backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
    }));

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

    useEffect(() => {
      fetch(`http://localhost:8080/contents/showFundingContentsDetail/${contentId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.writer);
          setData(data);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }, [contentId]);

    console.log("contentId in SwipeableEdgeDrawer:", contentId);
    if (!data) return null;

    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(50% - ${drawerBleeding}px)`,
                        overflow: 'visible',
                    },
                }}
            />
            <SwipeableDrawer
                container={container}
                anchor="bottom"
                open={open}
                onClose={onClose}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{ 
                  '& .MuiDrawer-paper': {
                    width: '50%', // Drawer의 너비를 70%로 설정
                    marginLeft: 'auto', // 왼쪽 마진을 자동으로 설정하여 중앙에 배치
                    marginRight: 'auto', // 오른쪽 마진을 자동으로 설정하여 중앙에 배치
                  } 
                }}
            >
                <StyledBox
                    sx={{
                        position: 'absolute',
                        top: -drawerBleeding,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        visibility: 'visible',
                        right: 0,
                        left: 0,
                    }}
                >
                    <Puller />
                    <Typography sx={{ p: 2, color: 'text.secondary' }}>선물 선택</Typography>
                </StyledBox>
                <StyledBox
                    sx={{
                        px: 2,
                        pb: 2,
                        height: '100%',
                        overflow: 'auto',
                    }}
                >
                    {/* Contents of the drawer */}
                    <Support contentId={contentId}/>
                    <div>
    {data && data.gifts && data.gifts.map((gift, index) => (
        <div 
            style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                width: "90%", 
                background: "white", 
                border: "1px solid #F5F5F5", 
                boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.2)',
                margin: "10px 20px 20px 20px",
                padding: '10px',
            }}
        >
            <div style={{ width: '80px' }}> {/* 왼쪽 빈 공간 */}
                {expandedGift === index ? <div style={{ width: '100%' }}></div> : null}
            </div>

            <div 
                onClick={() => handleGiftClick(index)}
                style={{ 
                    flexGrow: 1, 
                    marginLeft:'180px'
                }}
            >
                <h2>{gift.criterion}원 + </h2>
                <h4>{gift.giftList}</h4>
            </div>

            <div style={{ width: '150px', marginRight: '30px' }}> {/* 오른쪽에 후원금 입력 박스와 후원하기 버튼 */}
                {expandedGift === index && (
                    <>
                        <input 
                            type="number" 
                            placeholder="후원금액"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            style={{
                                marginBottom: '5px',
                                width: '100%',
                                padding: '5px',
                                height:'50px'
                            }}
                        />
                        <button onClick={handleSupportClick}
                            style={{ 
                                background: "#333", // 원하는 배경색으로 설정
                                color: "#FFF", // 원하는 글자색으로 설정
                                border: "none",
                                marginTop:'8px',
                                padding: "5px 10px",
                                cursor: 'pointer',
                                width: '100%',
                                height:'40px'
                            }}
                        >
                            후원하기
                        </button>
                    </>
                )}
            </div>
        </div>
    ))}
</div>
                </StyledBox>
            </SwipeableDrawer>
        </Root>
    );
}

SwipeableEdgeDrawer.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    window: PropTypes.func,
    contentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default SwipeableEdgeDrawer;
