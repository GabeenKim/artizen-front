import React, {useEffect, useState} from "react";
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

import MenuBar from '../../src/components/MenuBar'; 
import Footer from '../../src/components/Footer';
import { ContainerBody } from "../styles/BodyStyle";
import Alert from '@mui/material/Alert';


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
    max-width: 720px;

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
    width: calc(100% - 32px);
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

const SelectBox = () => {
	return (
        <div>
            <span>티켓 수량 : </span>
		<select style={{ width: '200px', height: '30px' }}>
			<option key="1" value="1">
				1매
			</option>
			<option key="2" value="2">2매</option>
			<option key="3" value="2">3매</option>
		</select>
        </div>
	);
};

const LeftSide = styled.div`
    flex: 1;
    margin-right: 16px;
`;

const RightSide = styled.div`
    flex: 2;
`;

function PostWritePage(props) {
    const navigate = useNavigate();

    const [category, setCategory] = useState("show");
    const [contentName, setContentName] = useState("");
    const [target, setTarget] = useState("");
    const [startDay, setStartDay] = useState("");
    const [endDay, setEndDay] = useState("");
    const [dateRange, setDateRange] = useState([dayjs('2023-09-12'), dayjs('2023-09-21')]);
    const [writerId, setWriterId] = useState(2);
    const [contentDetail, setContentDetail] = useState("");
   // const [transaction, setTransaction] = useState("");
    const [productionCost, setProductionCost] = useState("");
    const [purpose, setPurpose] = useState("");
    const [minInvest, setminInvest] = useState("");
    let [isInputClicked, setIsInputClicked] = useState(false);
    //const {height, value, onChange} = props;
    

    const [dialogOpen, setDialogOpen] = useState(false);
    
    const [openConfirm, setOpenConfirm] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);


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

    useEffect(() => {
        
        const sessionToken = localStorage.getItem('sessionToken');

       setWriterId(sessionToken);  
    }, []);

    //날짜선택
      const [value, setValue] = React.useState([
        dayjs('2023-09-12'),
        dayjs('2023-09-21'),
      ]);
    
      //db연결
      const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            console.log('데이터가 성공적으로 추가되었습니다.');
            setDialogOpen(true);

            const startDate = dateRange[0];
            const endDate = dateRange[1];
    
            const response = await axios.post('http://10.10.221.40:9999/poster/addFundingContents', {
                contentName:contentName,
                target:target,
                category:category,
                startDay: startDate.format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),  // ISO 8601 형식으로 변환
                endDay: endDate.format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),  // ISO 8601 형식으로 변환
                writerId:2,
                fundingContents: { 
                    detail: contentDetail, 
                    productionCost:productionCost, 
                    purpose:purpose, 
                    minInvest:minInvest 
                }
        });

            console.log(response.data); // 성공적으로 추가된 데이터 확인

            // 성공적으로 데이터가 추가되었을 때의 처리
            console.log('데이터가 성공적으로 추가되었습니다.');
            navigate("/"); 
        } catch (error) {
            console.error('오류 발생:', error);
        }
    };

       
    return (
       <>
       <ContainerBody>
       <MenuBar/>       
        <Wrapper>
         <form onSubmit={handleSubmit}>
            <Container style={{ display: 'flex' }}>
                <LeftSide>
                <Uploader >
                <input type="file" accept="image/*" />
                </Uploader>
                </LeftSide>
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

                <SelectBox></SelectBox>
             
                 <TextIn
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
                 />
                 {/* <TextIn
                height={20}
                value={transaction}
                onChange={(event) => {
                    setTransaction(event.target.value);
                }}
                onFocus={() => {
                    setIsInputClicked(true);
                }}
                onBlur={() => {
                    setIsInputClicked(false);
                }}
                placeholder={isInputClicked === true ? "" : "객단가 ... 순수익.."}
                 /> */}
                 <TextIn
                height={20}
                value={productionCost}
                onChange={(event) => {
                    setProductionCost(event.target.value);
                }}
                onFocus={() => {
                    setIsInputClicked(true);
                }}
                onBlur={() => {
                    setIsInputClicked(false);
                }}
                placeholder={isInputClicked === true ? "" : "프로젝트 예산에 대해 적어주세요."}
                 />
                 <TextIn
                height={20}
                value={minInvest}
                onChange={(event) => {
                    setminInvest(event.target.value);
                }}
                onFocus={() => {
                    setIsInputClicked(true);
                }}
                onBlur={() => {
                    setIsInputClicked(false);
                }}
                placeholder={isInputClicked === true ? "" : "최소투자금액을 설정해주세요"}
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
            </Container>
            </form>
    
        </Wrapper>
        </ContainerBody>
        <Footer/>
        </>
    );

}

export default PostWritePage;