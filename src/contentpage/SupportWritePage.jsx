import React, {useRef, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CategoryFilter from "./CategoryFilter";
import 'react-calendar/dist/Calendar.css';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import Uploader from "./Uploader";
import axios from 'axios';
import Button from '@mui/joy/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import MenuBar from '../components/MenuBar'; 
import Footer from '../components/Footer';
import { ContainerBody } from "../styles/BodyStyle";
import { addSupportContents } from "../api/tmp";
import Swal from 'sweetalert2';
import { LastOuterContainer } from "../styles/BodyStyle";


const Wrapper = styled.div`
    padding: 10px;
    width: calc(100% - 20px);
    display: flex;

    align-items: center;
    justify-content: center;
    font-size:14px;
`;

const Container = styled.div`
    width: 100%;
    max-width: 850px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;
const categories = [
    {
      name : "공연",
      value : "show"
    },
    {
      name : "영화",
      value : "movie"
    },
    {
      name : "전시",
      value : "exhibition"
    }
  ];
const CalendarRow = styled.div`
  display: flex;
  justify-content: space-between; // 캘린더 컴포넌트 사이에 공간 추가
`;


const TextIn = styled.textarea`
    width: calc(100% - 16px);
    ${(props)=>
        props.height &&
        `
            height : ${props.height}px;
        `}
        padding : 16px; 
        font-size :16px; 
        line-height:20px;
        margin : 10px;

`;
const select = styled.select`
    height: 80px;
    width: 110px;
`;


const LeftSide = styled.div`
    flex: 1;
    margin-right: 100px;

`;

const RightSide = styled.div`
    flex: 2;
`;

function PostWritePage({props}) {
    const navigate = useNavigate();
    const [contentId, setContentId] = useState("");
    const [category, setCategory] = useState("show");
    const [contentName, setContentName] = useState("");
    const [contentDetail, setContentDetail] = useState("");
    const [target, setTarget] = useState("");
    const [dateRange, setDateRange] = useState([dayjs('2023-09-12'), dayjs('2023-09-21')]);
    const [startDay, setStartDay] = useState("2023-10-10");
    const [endDay, setEndDay] = useState("2023-10-11");
    const [writerId, setWriterId] = useState(2);
    const [imageUrl, setImageUrl] = useState("");
    const [teamDetail, setTeamDetail] = useState("");
    const [planDetail, setPlanDetail] = useState("");
    const [criterion, setCriterion] = useState("");
    const [giftList, setGiftList] = useState("");
    const [ticketCnt, setTicketCnt] = useState("");
    let [isInputClicked, setIsInputClicked] = useState(false);

    
    
    const [dialogOpen, setDialogOpen] = useState(false);
    
    const [openConfirm, setOpenConfirm] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [imageData, setImageData] = useState(null);

    //선물리스트 추가
    const onChangeCriterion = (e) => { 
        setCriterion(e.target.value);
      };
      
    const onChangeGiftList = (e) => { 
    setGiftList(e.target.value);
    };
    
    const onChangeTicketCnt = (e) => { 
        setTicketCnt(e.target.value);
        };
    const SelectBox = () => {
    return (
        <div>
        <span> 수량 : </span>
        <select style={{ width: '60px', height: '30px', margin : '10px'}}
            onChange={onChangeTicketCnt}
            value={ticketCnt}>
            <option key="0" value="0"> 0</option>
            <option key="1" value="1"> 1매</option>
            <option key="2" value="2">2매</option>
            <option key="3" value="3">3매</option>
        </select>
        </div>
    );
};
    
    //선물리스트 후 초기화 
    const inputRef = useRef(null);
    const onClickAddButton = () => { 
        const newGift = { 
            criterion: criterion,
            giftList: giftList,
            ticketCnt : ticketCnt 
         };
        
         setGifts([...gifts, newGift]);
        
         // 상태 초기화 및 포커스 설정.
         setCriterion('');
         setGiftList('');
         setTicketCnt(''); 
        
         inputRef.current.focus(); 
      };
    
    const deleteButton =(index) => {
        setGifts(gifts.filter((gift) => gift !== gifts[index]))
    }  

    const [gifts, setGifts] = useState([]);  


    const handleClickOpen = () => {
        setOpenConfirm(true);
    };
  
    const handleClose = () => {
        setOpenConfirm(false);
    };

    const handleCloseSuccess = () => {
        setOpenSuccess(false);
        navigate("/");
      };

    const handleImageUpload = (data) => {
        setImageData(data);
     
    }  
    useEffect(() => {
        
        const sessionToken = localStorage.getItem('sessionToken');

       setWriterId(sessionToken);  
    }, []);

    //날짜선택
      const [value, setValue] = React.useState([
        dayjs('2023-09-12'),
        dayjs('2023-09-21'),
      ]);

      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log('데이터가 성공적으로 추가되었습니다.');
            setDialogOpen(true);
    
            const startDate = dateRange[0];
            const endDate = dateRange[1];
            
            addSupportContents({
                contentName:contentName,
                target:target,
                category:category,
                startDay: startDate.format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),  // ISO 8601 형식으로 변환
                endDay: endDate.format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),  // ISO 8601 형식으로 변환
                writerId: 1,
                supportContents:{
                    contentId : contentId,
                    detail: contentDetail, 
                    teamDetail : teamDetail,
                    planDetail : planDetail
                    },
                gift: gifts, 
                imageUrl:imageData.url
            }).then((res)=>{
                console.log(res.status)
                return res.json()
            }).then((res)=>{
                console.log(res)
                console.log('데이터가 성공적으로 추가되었습니다.');
                Swal.fire({
                    icon: 'success',
                    title: '게시글 등록 요청이 성공되었습니다! 관리자 승인 후 게시글이 보여집니다 :)',
                    showConfirmButton: false,
                    timer: 3000,
                    customClass: {
                        container: 'swal2-highest-z-index'
                    }
                });
            
                navigate("/"); 
            }).catch((e)=>console.log(e))
        } catch (error) {
            console.error('오류 발생:', error);
        }
    };
       
    return (
        
        <LastOuterContainer>
        <MenuBar/>
        <ContainerBody>
        <Wrapper>
        <Container style={{ display: 'flex' }}>
            <LeftSide>
                <Uploader onUpload={handleImageUpload} >
                < input type="file" />
                </Uploader>
            </LeftSide>
            
            <form onSubmit={handleSubmit}>
                <RightSide>
                <CategoryFilter
                categories={categories}
                category={category}
                setCategory={setCategory}
                value={category}
                    onChange={(event) => {
                        setCategory(event.target.value);
                    }}
                />
               

                <TextIn
                    height={20}
                    value={contentName}
                    onChange={(event) => {
                        setContentName(event.target.value);
                    }}
                    onFocus={() => {
                        setIsInputClicked(true);
                    }}
                    onBlur={() => {
                        setIsInputClicked(false);
                    }}
                    placeholder={isInputClicked === true ? "" : "제목을 입력해주세요."}
                />
                
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                 <DemoContainer components={['DateRangePicker', 'DateRangePicker']}>
                     <DemoItem component="DateRangePicker">
                         <DateRangePicker
                             value={dateRange}
                             onChange={(newValue) => setDateRange(newValue)}
                         />
                     </DemoItem>
                 </DemoContainer>
             </LocalizationProvider>
                

                <TextIn
                    height={400}
                    value={contentDetail}
                    onChange={(event) => {
                        setContentDetail(event.target.value);
                    }}
                    onFocus={() => {
                        setIsInputClicked(true);
                    }}
                    onBlur={() => {
                        setIsInputClicked(false);
                    }}
                    placeholder={isInputClicked === true ? "" : "내용을 입력해주세요."}
                />
                <TextIn
                    height={20}
                    value={target}
                    onChange={(event) => {
                        setTarget(event.target.value);
                    }}
                    onFocus={() => {
                        setIsInputClicked(true);
                    }}
                    onBlur={() => {
                        setIsInputClicked(false);
                    }}
                    placeholder={isInputClicked === true ? "" : "목표하는 후원금을 입력해주세요."}
                />
               <div  style={{ display: 'flex', alignItems: 'center' }} > 
                <TextIn
                    height={5}
                    style={{ width: '60px' }}
                    value={criterion}
                    ref={inputRef}
                    onChange={onChangeCriterion}
                    onFocus={() => {
                        setIsInputClicked(true);
                    }}
                    onBlur={() => {
                        setIsInputClicked(false);
                    }}
                    placeholder={isInputClicked === true ? "" : "금액 기준"}
                    
                />
                 <TextIn
                    height={5}
                    style={{ width: '60px' }}
                    value={giftList}
                    ref={inputRef}
                    onChange={onChangeGiftList}
                    onFocus={() => {
                        setIsInputClicked(true);
                    }}
                    onBlur={() => {
                        setIsInputClicked(false);
                    }}
                    placeholder={isInputClicked === true ? "" : "선물내용"}
                    
                /> <SelectBox onChange={onChangeTicketCnt} ref={inputRef} value={ticketCnt}> </SelectBox>
                <button  onClick={onClickAddButton} > 선물 리스트 추가 </button>
                </div>
                <div>
                    {gifts.map((gift, index) => (
                        <div key={index}
                            id={index}
                            style={{
                            border: '1px solid #ccc',
                            borderRadius: '10px',
                            padding: '20px',
                            margin: '10px',
                            boxShadow: '2px 2px 8px rgba(0, 0, 0, .1)'
                            }}>
                        <p>금액 기준: {gift.criterion} 원, 
                        선물 내용: {gift.giftList} ,
                        티켓 수량: {gift.ticketCnt} 개 </p>   
                        <button onClick={() => deleteButton(index)} > 삭제 </button>
                        </div>
                    ))}
                </div>
                 {/* <TextIn
                height={20}
                value={writerId}
                onChange={(event) => {
                    setWriterId(event.target.value);
                }}
                onFocus={() => {
                    setIsInputClicked(true);
                }}
                onBlur={() => {
                    setIsInputClicked(false);
                }}
                placeholder={isInputClicked === true ? "" : "작가아이디."}
                 /> */}
                <TextIn
                height={40}
                value={teamDetail}
                onChange={(event) => {
                    setTeamDetail(event.target.value);
                }}
                onFocus={() => {
                    setIsInputClicked(true);
                }}
                onBlur={() => {
                    setIsInputClicked(false);
                }}
                placeholder={isInputClicked === true ? "" : "팀에 대한 정보를 입력해 주세요."}
                 />
                <TextIn
                height={40}
                value={planDetail}
                onChange={(event) => {
                    setPlanDetail(event.target.value);
                }}
                onFocus={() => {
                    setIsInputClicked(true);
                }}
                onBlur={() => {
                    setIsInputClicked(false);
                }}
                placeholder={isInputClicked === true ? "" : "프로젝트 계획 정보를 입력해 주세요."}
                 />
               <Button variant="outlined" onClick={handleClickOpen}>
                        등록하기
                    </Button>
                    <Dialog
                        open={openConfirm}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                        {"작성내용을 전부 확인하셨나요?"}
                        </DialogTitle>
                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            게시물을 정말 올리시겠습니까?
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleClose}>취소하기</Button>
                        <Button onClick={async (event) => {
                            // 버튼의 기본 동작 중단
                            event.preventDefault();

                            // handleSubmit 함수 호출
                           await handleSubmit(event);
                          
                            setOpenConfirm(false);
                            setOpenSuccess(true);
                        
                        }} type="submit" autoFocus>
                          동의합니다. </Button>
                        </DialogActions>
                    </Dialog>
                       
                    <Dialog
                        open={openSuccess}
                        onClose={handleCloseSuccess}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        >
                        <DialogTitle id="alert-dialog-title">
                        {"게시글 등록 요청이 성공되었습니다"}
                        </DialogTitle>

                        <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            관리자 승인 후 게시물이 등록됩니다.
                        </DialogContentText>
                        </DialogContent>

                        {/* "확인하였습니다." 버튼 클릭 시 메인 페이지로 이동 */}
                        <DialogActions>
                            <Button onClick={handleCloseSuccess}>확인하였습니다.</Button>
                        </DialogActions>
                    </Dialog> 
                </RightSide>
            </form>
            </Container>
           
        </Wrapper>
        </ContainerBody>
        <Footer/>
        </LastOuterContainer>
    );

}

export default PostWritePage;