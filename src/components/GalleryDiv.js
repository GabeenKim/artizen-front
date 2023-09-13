import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import GalleryFicture from "./GalleryFicture";

export default function GalleryDiv({title, widths, data, isRecomm}){
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
                isRecomm &&
                <PopDown popdown={popdown}><span style={{fontWeight:"bold"}}>{localStorage.getItem("name")}님</span>을 위해 준비했어요</PopDown>
            }
            <DetailTitle>{title}</DetailTitle>
            <PictureDiv onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <GalleryFicture width={widths[0]} data={data[0]} isRecomm={isRecomm}/>
                <GalleryFicture width={widths[1]} data={data[1]} isRecomm={isRecomm}/>
                <GalleryFicture width={widths[2]} data={data[2]} isRecomm={isRecomm}/>
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
    width: 75%;
    
`

const PictureDiv = styled.div`
    display: flex;
    margin: 20px 150px;
`

const DetailTitle = styled.div`
    font-familiy: SUITE-Regular;
    -webkit-transform: rotate(90deg);
    -webkit-transform-origin: left top;
    -moz-transform: rotate(90deg);
    -moz-transform-origin: left top;
    -ms-transform: rotate(90deg);
    -ms-transform: left top;
    -o-transform: rotate(90deg);
    -o-transform-origin: left-top;
    transform: rotate(90deg);
    transform-origin: left top;

    position: absolute;
    top: 0;
    left: 100%;
    height: 10px;
    padding-top: 5%;
    padding-left: 5px;
    height: 100%;
    white-space: nowrap;
    text-align: center;
    line-height: 25px;
`