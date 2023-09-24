import { useRef, useState } from 'react';
import TestImg from '../../image/test-img.jpg'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function PastContent({item}){
    const btnRef = useRef();
    const navigate = useNavigate();
    const [hover, setHover] = useState(false);

    const clickBtn = () => {
        let id = btnRef.current.id;
        navigate(`/FundingContentDetail/${id}`);
    }

    return(
        <ContentDiv id={item.contentId} ref={btnRef} hover={hover} onClick={clickBtn} onMouseOver={()=>{setHover(true)}} onMouseOut={()=>{setHover(false)}}>
            <Bedge bg={'#075985'}>{item.category}</Bedge>
            <div><img src={item.image[0].imageUrl}/></div>
            <div className='text'>#{item.contentName}</div>
        </ContentDiv>
    )
}


const ContentDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 150px;
    height: 150px;
    margin: 10px 10px;
    padding: 10px 0;
    background-color: ${({hover})=>hover?'#d4d4d4':'white'};   
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    img{
        width: 150px;
        height: 100px;
        object-fit: contain;
    }

    .text{
        width: 100%;
        height: 100%;
        // padding-top: 15px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        line-height: 50px;

        font-weight: bold;
    }
`

const Bedge = styled.div`
    position: absolute;
    font-size: 12px;
    border-radius: 30px;
    height: 15px;
    background-color: ${({bg})=>bg};
    color: white;
    padding: 0 5px;
    top: 2px;
    right: 2px;

`