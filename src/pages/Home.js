import Footer from "../components/Footer";
import GalleryDiv from "../components/GalleryDiv";
import MenuBar from "../components/MenuBar";
import SwiperDiv from "../components/SwiperDiv";
import { ContainerBody } from "../styles/BodyStyle";


export default function Home(){
    var list = ["/img/mainLogo.png", "https://picsum.photos/500/300"];
    var link = ["/intro", "/event"]
    var widths1 = ["25%", "25%", "50%"]
    var widths2 = ["50%", "25%", "25%"]

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
                <GalleryDiv widths={widths1} data={dummyData}/>
                <GalleryDiv widths={widths2} data={dummyData}/>
            </ContainerBody>
            <Footer/>
        </div>
    )
}