import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
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

import MenuBar from '../../src/components/MenuBar'; 
import Footer from '../../src/components/Footer';
import { ContainerBody } from "../styles/BodyStyle";





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

function UpdatePage(props) {
    const navigate = useNavigate();
    const { contentId } = useParams();
    const [content, setContent] = useState({});
  
    const [category, setCategory] = useState("show");
    const [contentName, setContentName] = useState("");
    const [target, setTarget] = useState("");
    const [startDay, setStartDay] = useState("2023-09-12");
    const [endDay, setEndDay] = useState("2023-09-21");
    const [dateRange, setDateRange] = useState([dayjs('2023-09-12'), dayjs('2023-09-21')]);
    const [writerId, setWriterId] = useState(2);
    const [contentDetail, setContentDetail] = useState("");
   // const [transaction, setTransaction] = useState("");
    const [productionCost, setProductionCost] = useState("");
    const [purpose, setPurpose] = useState("");
    const [minInvest, setminInvest] = useState("");
    let [isInputClicked, setIsInputClicked] = useState(false);

    useEffect(() => {
        
        const sessionToken = localStorage.getItem('sessionToken');

       setWriterId(sessionToken);  
    }, []);

   
    // const getPost = async () => {
    //     const resp = await axios.get(`http://10.10.221.40:9999/poster/showFundingContentsDetail/${contentId}`); //contentId 아이디 넘어오게
    //     setPost(resp.data);
    //     };
    


    useEffect(() => {
        const fetchContent = async () => {
        const resp = await axios.get(`http://10.10.221.40:9999/poster/showFundingContentsDetail/${contentId}`);
        console.log(resp.data);
        setContent(resp.data);
        };
    
        fetchContent();
    }, [contentId]);

   // 게시글 수정 요청 처리 함수
   const handleUpdate = async (event) => {
    event.preventDefault();
    alert(contentName + " " + category + " " + startDay + " " + endDay);
    await axios.put(`http://10.10.221.40:9999/poster/updateContents`, {
        contentId : 37,
        contentName:contentName,
        target:target,
        category:category,
        startDay : new Date(startDay),
        endDay : new Date(endDay),
        writerId: 2,
        fundingContents: { 
            fundingId : 41,
            contentId : 37,
            detail: contentDetail, 
            productionCost:productionCost, 
            purpose:purpose, 
            minInvest:minInvest 
        }
    }

    
).then((res) => {
      alert('수정되었습니다.');
    
    });
  };

    const handleContentName =  (e) => {
         setContentName(e.target.value);
    };

    const handleCategory =  (e) => {
        setCategory(e.target.value);
    };
   
    console.log(content)
    return (
        <>
        <ContainerBody>
        <MenuBar/>    
        <Wrapper>
           
            <form onSubmit={handleUpdate}>
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
                value={content.category}
                setCategory={setCategory}
                onChange={handleCategory}
                />
              
               
                
                <TextIn
                    height={20}
                    value={content.contentName}
                    onChange={(event) => setContent({ ...content, contentName: event.target.value })}
                />
                
                
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                 <DemoContainer components={['DateRangePicker', 'DateRangePicker']}>
                     <DemoItem component="DateRangePicker">
                         <DateRangePicker
                             value={content.dateRange}
                            
                             onChange={(newValue) => setContent(newValue)}
                         />
                     </DemoItem>
                 </DemoContainer>
             </LocalizationProvider>
                

                <TextIn
                    height={400}
                    
                    value={content.contentDetail}
                    onChange={(event) => setContent({ ...content, contentDetail: event.target.value })}
                   
                />
                <TextIn
                    height={20}
                   
                    value={content.target}
                    onChange={(event) => setContent({ ...content, target: event.target.value })}
                   
                />

                <SelectBox></SelectBox>
             
                 <TextIn
                height={20}
                
                value={content.writerId}
                onChange={(event) => setWriterId({ ...content, writerId: event.target.value })}
                
                 />
               
                 <TextIn
                height={20}
                
                value={content.productionCost}
                onChange={(event) => setContent({ ...content, productionCost: event.target.value })}
                 />
                 <TextIn
                height={20}
            
                value={content.minInvest}
                onChange={(event) => setContent({ ...content, minInvest: event.target.value })}
              
                 />

                    <Button
                     onClick={handleUpdate} 
                    >수정완료</Button>
               
                </RightSide>
            </Container>
         </form>
        </Wrapper>
        <Footer/>        
        </ContainerBody>
        </>
    );

}

export default UpdatePage;