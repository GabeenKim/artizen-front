import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import styled from "styled-components";
import image from "../image/profile-user.png";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import SwipeableEdge from "../components/writerComponents/SwipeableEdge";
import { getWriterContents, getWriterInfo, getWriterReivew } from "../api/writer";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CurrentContent from "../components/writerComponents/CurrentContent";
import PastContent from "../components/writerComponents/PastContent";
import { LastOuterContainer } from "../styles/BodyStyle";

export default function WriterPage(){
    const [writer, setWriter] = useState();
    const [reviews, setReviews] = useState([]);
    const [contents, setContents] = useState([]);

    const {writerId} = useParams();
    const {state} = useLocation();
    console.log(state)
    
    const today = new Date();

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    const clickReview = () => {

    }

    contents.map((item, index)=> {
        console.log(today < new Date(Date.parse(item.endDay)))
    })

    useEffect(() => {
        getWriterInfo(writerId)
        .then((res)=>res.json())
        .then((res)=>setWriter(res))
        .catch((e)=>console.error(e))

        getWriterReivew(writerId)
        .then((res)=>res.json())
        .then((res)=>setReviews(res))
        .catch((e)=>console.error(e))

        getWriterContents(writerId)
        .then((res)=>res.json())
        .then((res)=>setContents(res))
        .catch((e)=>console.error(e))
        console.log(contents)
    }, [])

    return(
        <LastOuterContainer>
        <MenuBar/>
        <ContainerBody>
            <Container>
                <InnerContainer>
                <img src={image} style={{width: "30%"}}/>
                {
                    writer &&
                    <div style={{marginLeft:"20px", marginTop:"20px"}}>
                        {writer.NICKNAME != null ? writer.NICKNAME:null}
                        <p style={{fontWeight:"bold", fontSize:"20px", marginTop:"2px"}}>{writer.NAME}</p>
                        <span style={{display:'flex', justifyContent:'center', alignItems:'center'}}><ThumbUpAltIcon/><p style={{marginLeft:'5px'}}>{state.LIKES}</p></span>
                    </div>
                }

                </InnerContainer>

                <RatingDiv>
                <span>
                <span style={{marginRight:"5px", verticalAlign:"top"}}>전체 평점 </span>
                {
                    writer &&
                    <>
                    <Rating name="read-only" value={writer.AVG_SCORE} readOnly />
                    <span style={{verticalAlign:"top"}}> {Math.round(writer.AVG_SCORE*10)/10}</span>
                    </>
                }
                </span>
                <span onClick={toggleDrawer(true)} style={{cursor:"pointer"}}>더보기&gt;</span>
                </RatingDiv>
                <SwipeableEdge open={open} toggleDrawer={toggleDrawer} writer={writer} reviews={reviews}/>
                
                <DIV>
                <p>현재 진행 중인 프로젝트</p>
                {/* 가로로 긴 카드 형식     
                const startday = new Date(Date.parse(item.startDay));
                const endday = new Date(Date.parse(item.endDay));*/}
                {
                    contents &&
                    contents.map((item, index)=> 
                    {
                        if(today < new Date(Date.parse(item.endDay))){
                            return <CurrentContent key={index} item={item}/>
                        } else {
                            return null
                        }
                    })
                }
                </DIV>

                <DIV>
                <p>종료된 프로젝트</p>
                {/* 작은 카드 형식 + 무한스크롤로 호출되면 좋을듯.. */}
                <InnerContainer>
                {
                    contents &&
                    contents.map((item, index)=> 
                    {
                        if(today > new Date(Date.parse(item.endDay))){
                            return <PastContent key={index} item={item}/>
                        } else {
                            return null
                        }
                    })
                }
                </InnerContainer>
                </DIV>
            </Container>
        </ContainerBody>
        <Footer/>
        </LastOuterContainer>
    )
}

const Container = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const InnerContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const RatingDiv = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`

const DIV = styled.div`
    margin: 30px 0;
`

const ContainerBody = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 150px;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 100px;
`