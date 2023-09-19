import styled from 'styled-components'
import TestImg from '../../image/test-img.jpg'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CurrentContent({item}){
    const startday = new Date(Date.parse(item.startDay));
    const endday = new Date(Date.parse(item.endDay));
    const today = new Date();
    
    const btnRef = useRef();
    const navigate = useNavigate();

    const clickBtn = () => {
        let id = btnRef.current.id;
        navigate(`/post/${id}`);
    }

    return(
        <ContentBox id={item.contentId} ref={btnRef} onClick={clickBtn}>
            <img src={TestImg}/>
            <div style={{marginLeft:'10px'}}>
                <div style={{display:'flex'}}>
                <p style={{fontWeight:'bold'}}>{item.contentName}</p>
                <Bedge bg={'#075985'}>{item.category}</Bedge>
                <Bedge bg={'#10b981'}>{'모집중'}</Bedge>
                </div>
                <p>{startday.getFullYear()}년 {startday.getMonth()}월 {startday.getDate()}일 ~ {endday.getFullYear()}년 {endday.getMonth()+1}월 {endday.getDate()}일</p>
            </div>
        </ContentBox>
    )
}

const ContentBox = styled.div`
    width: 100%;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    display: flex;
    padding: 20px 0;
`

const Bedge = styled.div`
    border-radius: 30px;
    height: 20px;
    background-color: ${({bg})=>bg};
    color: white;
    padding: 0 5px;
    margin: 0 3px;
`