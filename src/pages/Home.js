import styled from "styled-components";
import Footer from "../components/Footer";
import GalleryDiv from "../components/GalleryDiv";
import MenuBar from "../components/MenuBar";
import SwiperDiv from "../components/SwiperDiv";
import { ContainerBody } from "../styles/BodyStyle";
import WriterDiv from "../components/WriterDiv";
import { writerDummyData } from '../assets/writerDummyData';

export default function Home(){
    var list = ["/img/mainLogo.png", "https://picsum.photos/1000/600"];
    var link = ["/intro", "/event"]
    var widths1 = ["25%", "25%", "50%"]
    var widths2 = ["50%", "25%", "25%"]

// 로그인 localStorage 정보
// localStorage.setItem("userId", 1);
// localStorage.setItem("infoId", 1);
// localStorage.setItem("name", "이해연");
// localStorage.setItem("nickname", "말하는 감자");

// 로그아웃
// localStorage.clear();


var dummyData = [
    {
        "contentId":1,
        "image": "https://picsum.photos/500/300?grayscale​",
        "attainment":33,
        "category": "전시",
        "remainDay": 20,
        "contentName": "한 마음 전시회",
    },{
        "contentId":2,
        "image": "https://picsum.photos/500/300",
        "attainment":55,
        "category": "후원",
        "remainDay": 10,
        "contentName": "제22회 서울카페쇼 2023",
    },
    {
        "contentId":3,
        "image": "https://picsum.photos/600/400?grayscale​",
        "attainment":53,
        "category": "전시",
        "remainDay": 10,
        "contentName": "스누피 전시회",
    }
]

return (
    <div>
        <MenuBar/>
        <ContainerBody>
            <SwiperDiv height={100} list={list} link={link}/>
            <p>작가</p>
            <div style={{display:"flex", justifyContent:"center"}}>
            <WriterDiv writers={writerDummyData}/>
            </div>
            <div style={{display:"flex", justifyContent:"center", width:"100%"}}>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            &nbsp;
            {
                localStorage.getItem("name") != null ?
                <GalleryDiv widths={widths1} data={dummyData} isRecomm={true}/> : null
            }
            <GalleryDiv title={"주목할만한 펀딩 목록"} widths={widths1} data={dummyData}/>
            <GalleryDiv title={"완료된 펀딩"} widths={widths2} data={dummyData}/>
            </div>
            </div>
        </ContainerBody>
        <Footer/>
    </div>
)
}