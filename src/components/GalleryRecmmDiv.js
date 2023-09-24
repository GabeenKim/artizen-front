import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import GalleryFicture from "./GalleryFicture";
import GalleryRecommFicture from "./GalleryRecommFicture";

//fundingData={notableContents} supportData={notableContents2} widths={widths2}
export default function GalleryRecommDiv({widths, fundingData, supportData}){
    const [data, setData] = useState([]);
    const [randomIndices, setRandomIndices] = useState([]);

    useEffect(() => {
      const updatedData = [];
  
      fundingData.forEach((a) => {
        a.isFunding = true;
        updatedData.push(a);
      });
  
      supportData.forEach((a) => {
        a.isFunding = false;
        updatedData.push(a);
      });
  
      setData(updatedData);

      // Randomly select three unique indices from data array
      const indices = [];
      
      while(indices.length < 3){
          var r = Math.floor(Math.random() * updatedData.length);
          if(indices.indexOf(r) === -1) indices.push(r);
      }

     setRandomIndices(indices);

    }, []);

    const [popdown, setPopdown] = useState(false);

    const handleMouseOver = () => {
        setPopdown(true);
    }
    
    const handleMouseOut = () => {
        setPopdown(false);
    }

    return(
        <PictureContainer>
            <PopDown popdown={popdown}><span style={{fontWeight:"bold"}}>{localStorage.getItem("name")}님</span>을 위해 준비했어요</PopDown>

            {
                data &&
                <PictureDiv onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <GalleryRecommFicture width={widths[0]} data={data[randomIndices[0]]}/>
                    <GalleryRecommFicture width={widths[1]} data={data[randomIndices[1]]}/>
                    <GalleryRecommFicture width={widths[2]} data={data[randomIndices[2]]}/>
                </PictureDiv>
            }


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