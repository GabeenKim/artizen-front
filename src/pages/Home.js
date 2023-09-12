import styled from "styled-components";
import Footer from "../components/Footer";
import GalleryDiv from "../components/GalleryDiv";
import MenuBar from "../components/MenuBar";
import SwiperDiv from "../components/SwiperDiv";
import { ContainerBody } from "../styles/BodyStyle";


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
			"image": "https://picsum.photos/300/200?grayscale​",
			"attainment":33,
			"category": "전시",
			"remainDay": 20,
			"contentName": "한 마음 전시회",
        },{
            "contentId":2,
			"image": "https://picsum.photos/300/200",
			"attainment":55,
			"category": "후원",
			"remainDay": 10,
			"contentName": "제22회 서울카페쇼 2023",
        },
        {
            "contentId":3,
			"image": "https://picsum.photos/400/300?grayscale​",
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
                &nbsp;
                {
                    localStorage.getItem("name") != null ?
                    <>
                    <p><span style={{fontWeight:"bold"}}>{localStorage.getItem("name")}님</span>에게 추천하는 영화, 공연, 전시를 준비했어요</p>
                    <GalleryDiv widths={widths1} data={dummyData}/>
                    </> : null
                }
                <p>주목할만한 펀딩 목록</p>
                <GalleryDiv title={"주목할만한 펀딩 목록"} widths={widths1} data={dummyData}/>
                <p>완료된 펀딩</p>
                <GalleryDiv title={"완료된 펀딩"} widths={widths2} data={dummyData}/>
            </ContainerBody>
            <Footer/>
        </div>
    )
}