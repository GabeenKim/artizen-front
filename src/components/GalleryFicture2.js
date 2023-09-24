import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function GalleryFicture2({width, data}){
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();
    const [startDay, setStartDay] = useState();
    const [endDay, setEndDay] = useState();
    const [diffDay, setDiffDay] = useState();

    const handleMouseOver = () => {
        setHover(true);
    }
    const handleMouseOut = () => {
        setHover(false);
    }
    const clickPicture = () => {
        
        navigate(`/FundingContentDetail/${data.CONTENT_ID}`);
    }

    useEffect(() => {
        setStartDay(''.concat(new Date(data.START_DAY).getFullYear(), "-" , new Date(data.START_DAY).getMonth(), "-", new Date(data.START_DAY).getDay()));
        setEndDay(''.concat(new Date(data.END_DAY).getFullYear(), "-" , new Date(data.END_DAY).getMonth(), "-", new Date(data.END_DAY).getDay()));

        const t1 = new Date(startDay);
        const t2 = new Date(endDay);
        const today = new Date();

        let diff = Math.abs(today.getTime() - t2.getTime());
        diff = Math.ceil(diff / (1000 * 60 * 60 * 24));
        setDiffDay(diff);
    },[]);

    return(
        <>
        <Picture width={width} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={clickPicture}>
            <PictureInfo hover={hover}>
                <div style={{display:"flex", justifyContent:"space-between", paddingLeft:"20px", paddingRight:"20px", marginRight:"20px", width:"100%"}}>
                    <Tag>{data.CATEGORY}</Tag>
                    <Tag>D-{diffDay==0?"day":diffDay}</Tag>
                </div>
                <div style={{ height:"80%" }}>
                    <MainInfo>
                        <p style={{fontSize:"18px"}}>{data.CONTENT_NAME}</p>
                        <p>{data.CONTENT_SUM / data.TARGET}% 달성</p>
                    </MainInfo>
                </div>
            </PictureInfo>
            <Img hover={hover} src={data.IMAGE_URL}/>
            <Percent width={parseInt(data.CONTENT_SUM) / parseInt(data.TARGET)}></Percent>
        </Picture>
        </>
    );
}

const Percent = styled.div`
    background-color: black;
    width: ${({width})=>width}%;
    height: 2px;

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
    color: white;
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
    background-color:black;
    border-radius: 8px;
    padding:1px;
`