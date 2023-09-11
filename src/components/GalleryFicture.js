import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function GalleryFicture({width, data}){
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();

    const handleMouseOver = () => {
        setHover(true);
    }
    const handleMouseOut = () => {
        setHover(false);
    }
    const clickPicture = () => {
        console.log(data.contentId);
        navigate(`/post/${data.contentId}`);
    }

    return(
        <>
        <Picture width={width} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={clickPicture}>
            <PictureInfo hover={hover}>
                <div style={{display:"flex", justifyContent:"space-between", paddingLeft:"20px", paddingRight:"20px", marginRight:"20px", width:"100%"}}>
                    <Tag>{data.category}</Tag>
                    <Tag>D-{data.remainDay==0?"day":data.remainDay}</Tag>
                </div>
                <div style={{ height:"80%" }}>
                    <MainInfo>
                        <p style={{fontSize:"18px"}}>{data.contentName}</p>
                        <p>{data.attainment}% 달성</p>
                    </MainInfo>
                </div>
            </PictureInfo>
            <Img hover={hover} src={data.image}/>
            <Percent width={data.attainment}></Percent>
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