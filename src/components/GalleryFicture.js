import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import dayjs from 'dayjs';

export default function GalleryFicture({width, data, isFunding, isEnded}){
    const [hover, setHover] = useState(false);
    const [remainDay, setRemainDay] = useState(0);
    const navigate = useNavigate();

    const handleMouseOver = () => {
        setHover(true);
    }
    const handleMouseOut = () => {
        setHover(false);
    }
    const clickPicture = () => {
        let link = "";
        if(isFunding) {
            link = `/FundingContentDetail/${data.contentId}`;
        } else{
            link = `/SupportContentDetail/${data.contentId}`;
        }
        if(isEnded) link="#";
        navigate(link);
    }
 
    

    useEffect(()=>{
        if(data){
            const diffDate = new Date(data.endDay).getTime() - new Date().getTime();
            setRemainDay(Math.ceil(diffDate/(1000 * 60 * 60 * 24)));
            // console.log(remainDay, data, new Date(data.startDay).getDate(), new Date(data.endDay).getDate())
        }
    }, [data])

    // let attainment;
    // if (data && data.contentSum == 0) {
    //     attainment = 0;
    // } else {
    //     attainment = ((data.target / data.contentSum) * 100);
    // }

    // const startDate = dayjs(data.startDay);
    // const endDate = dayjs(data.endDay);

    // let diff = endDate.diff(startDate, 'day');

  
    return(
        <>
        {
            data && 
            <Picture width={width} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={clickPicture}>
                <PictureInfo hover={hover}>
                    <div style={{display:"flex", justifyContent:"space-between", paddingLeft:"20px", paddingRight:"20px", marginRight:"20px", width:"100%"}}>
                        <Tag>{data.category}</Tag>
                        <Tag>D{remainDay === 0 ? "-day" : (remainDay < 0 ? '+'+ (Math.abs(remainDay)).toString() : '-'+ (remainDay).toString())}</Tag>
                    </div>
                    <div style={{ height:"80%" }}>
                        <MainInfo>
                            <p style={{fontSize:"18px"}}>{data.contentName}</p>
                            <p>{(data.contentSum / data.target * 100).toFixed(2)}% 달성</p>
                        </MainInfo>
                    </div>
                </PictureInfo>
                <Img hover={hover} src={data.image[0].imageUrl} />
                
                <Percent width={(data.contentSum / data.target * 100)<=100 ? (data.contentSum / data.target * 100) : 100}></Percent>
            </Picture>
        }
        </>
    );
}

const Percent = styled.div`
    // background-color: red;
    background: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    width: ${({width})=>width}%;
    height: 5px;

`
const MainInfo = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Picture = styled.div`
    width: ${({width})=>width};
    height: 300px;
    padding: 10px;
    position: relative;
    margin-bottom: 40px;
`

const PictureInfo = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    color: black;
    width: 100%;
    height: 100%;
    font-weight: 600;

    z-index: 1;
    visibility: hidden;
    ${({hover})=>hover&&`
        visibility:visible;
    `}
`

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1);
    filter: grayscale(0) blur(0);
    transition: .5s ease-in-out;
    
    ${({hover})=>hover&&`
        transform: scale(1.05);
        filter: grayscale(100%) blur(3px);
    `}
`

const Tag = styled.div`
    margin: 0 10px;
    background-color:white;
    border-radius: 8px;
    padding:1px;
`