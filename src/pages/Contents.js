import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dummyData } from "../assets/dummyData";
import SwiperMultipleDiv from "../components/SwiperMultipleDiv";
import MenuBar from "../components/MenuBar";
import { ContainerBody, LastOuterContainer } from "../styles/BodyStyle";
import Footer from "../components/Footer";
import styled from "styled-components";
import Button from '@mui/material/Button';

export default function Contents(){
    const [data, setData] = useState([]);

    const [movieData , setMovieData ] = useState([]);
    const [showData , setShowData ] = useState([]);
    const [exhibitionData , setExhibitionData ] = useState([]);

    const {type} = useParams();
    const navigate = useNavigate();
    console.log(type);
    var api = "";
    var link = ""
    if(type === 'funding'){
        api = "http://localhost:9999/poster/showAllFundingContents"
        link = "/fundingmore";
    }else if(type === 'support'){ 
        api = "http://localhost:9999/poster/showAllSupportContents"
        link = "/supportmore";
    }

    async function getData(url){
        console.log(url)
        const response = await fetch(url, {
            method: "GET",   
        })
        return response.json();
    }
    
    const clickMore = (e) => {
        navigate(`/contents/${type}/${e.target.id}`);
       
    }

    useEffect(()=>{
        getData(api).then((data) => {
            console.log(data);
            // setData(data)
            setMovieData(data.filter(content => content.category === 'movie'))
            setShowData(data.filter(content => content.category === 'show'))
            setExhibitionData(data.filter(content => content.category === 'exhibition'))

            console.log(movieData, showData, exhibitionData)
        });

        // setData(dummyData);
        // console.log(data);
    }, []);

    return (
        <LastOuterContainer>
            <MenuBar/>
            <ContainerBody>
                <Title>
                {
                    type=='funding'?
                    <h1>투자</h1>:
                    type=='support'?
                    <h1>후원</h1>: null
                }
                </Title>
                <ButtonContainer>                
                    {type === 'funding' && (
                    <Button style={{ marginRight: "16px" }} onClick={() => navigate("/funding-write")}>
                        펀딩 글 작성하기
                    </Button>
                )}
                {type === 'support' && (
                    <Button onClick={() => navigate("/support-write")}>
                        후원 글 작성하기
                    </Button>
                )}
                </ButtonContainer>
               
                <Title><h2>영화</h2><p onClick={() => navigate(link,  { state: { category: 'movie' } })}  id="movie">더보기&gt;</p></Title>
                <SwiperMultipleDiv data={movieData} type={type}></SwiperMultipleDiv>
                <Title><h2>공연</h2><p onClick={() => navigate(link,  { state: { category: 'show' } })}  id="show">더보기&gt;</p></Title>
                <SwiperMultipleDiv data={showData} type={type}></SwiperMultipleDiv>
                <Title><h2>전시</h2><p onClick={() => navigate(link,  { state: { category: 'exhibition' } })}   id="exhibition">더보기&gt;</p></Title>
                <SwiperMultipleDiv data={exhibitionData} type={type}></SwiperMultipleDiv>

            </ContainerBody>
            <Footer/>
        </LastOuterContainer>
    )
}

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 100px;

    p{
        line-height: 48px;
        cursor: pointer;

        font-family: 'SUITE-Regular';
    }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;