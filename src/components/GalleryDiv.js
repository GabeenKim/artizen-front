import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import GalleryFicture from "./GalleryFicture";

export default function GalleryDiv({title, widths, data, isRecomm, isFunding, isEnded}){
    const [popdown, setPopdown] = useState(false);
    const handleMouseOver = () => {
        setPopdown(true);
    }
    const handleMouseOut = () => {
        setPopdown(false);
    }

    return(
        <PictureContainer>
            {
                isRecomm ?
                <PopDown popdown={popdown}><span style={{fontWeight:"bold"}}>{localStorage.getItem("name")}님</span>을 위해 준비했어요</PopDown>
                : <DetailTitle><span>'</span>{title}</DetailTitle>
            }
            <PictureDiv onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <GalleryFicture width={widths[0]} data={data[0]} isFunding={isFunding} isEnded={isEnded}/>
                <GalleryFicture width={widths[1]} data={data[1]} isFunding={isFunding} isEnded={isEnded}/>
                <GalleryFicture width={widths[2]} data={data[2]} isFunding={isFunding} isEnded={isEnded}/>
            </PictureDiv>

        </PictureContainer>
    )
}
const boxFade = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const PopDown = styled.div`
    width: 100%;
    visibility: hidden;
    text-align: center;
    opacity: 0;
    transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

    ${({popdown})=>
        popdown &&
        `
        opacity: 1;
        visibility: visible;
        `
    }
`

const PictureContainer = styled.div`
    position: relative;
    width: 100%;
    
`

const PictureDiv = styled.div`
    width: 100%;
    display: flex;
    // margin: 20px 150px;
`

const DetailTitle = styled.div`
    font-size: 15px;
    span{
        width: 1px;
        height: 10px;
        background-color: #b3c0c9;
        margin-right: 2px;
        color: #b3c0c9;
    }
`