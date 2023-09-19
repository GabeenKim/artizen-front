import styled from "styled-components";
import Footer from "../components/Footer";
import GalleryDiv from "../components/GalleryDiv";
import MenuBar from "../components/MenuBar";
import SwiperDiv from "../components/SwiperDiv";
import { ContainerBody } from "../styles/BodyStyle";
import WriterDiv from "../components/WriterDiv";
import { writerDummyData } from '../assets/writerDummyData';
import{gsap} from 'gsap';
import {useEffect,useState} from 'react';
import '../styles/home.scss'


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



    const [visited, setVisited] = useState(false);

  useEffect(() => {
    if(sessionStorage.getItem('visited')){
      setVisited(true);
    } else {
        const animationOptions = {
        ease: 'expo.inOut'
        };
        const introAnimation = () => {
            const tl = gsap.timeline({
                defaults: {
                    ease: animationOptions.ease,
                    duration: 0.7,
                }
            });
            
            tl.to('.intro__title', {
                duration: 1,
                y: 0,
                autoAlpha: 1,
                delay: 0.5,
            })
            .to('.intro__background--left, .intro__background--right', {
                scaleX: 1,
            })
            .to('.intro__background--left, .intro__background--right', {
                scaleY: 0,
                transformOrigin: 'top center',
            })
            .to('.intro__title', {
                duration: 1,
                y: -60,
                autoAlpha: 0,
            }, '-=0.6')
            .to('.intro', {
                y: '-100%',
                onComplete : () => {sessionStorage.setItem('visited',"true"); setVisited(true);}
            }, '-=0.5')
            
            return tl;
        }
        const skewInElements = elements => {
            const tl = gsap.timeline();
            
            tl.from(elements, {
                duration: 1,
                ease: animationOptions.ease,
                skewY: -5,
                autoAlpha: 0,
                y: 40,
            })
            
            return tl;
        }
    
    
        const fadeInElements = elements => {
            const tl = gsap.timeline();
            
            tl.from(elements, {
                duration: 1,
                ease: animationOptions.ease,
                y: '20px',
                autoAlpha: 0,
                stagger: 0.1,
            })
            
            return tl;
        }
        
        const master = gsap.timeline({
            paused: false,
            delay: 0.2,
        });
    
        master
            .add(introAnimation())
            .add(fadeInElements('.header__logo, .header__nav a'))
            .add(skewInElements('h1, .hero__col--2 img'), '-=1')
    }
    }, []);


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

if(!visited){
    return (
        <section className="intro">
        <h2 className="intro__title hidden" style={{marginTop:'200px', fontFamily : 'Cosi Azure'}}>Beyond art, <br/>see the people
        <br/>
        <br/></h2>
        <h4 className="intro__title hidden" style={{fontFamily : 'Ageo'}}>Artizen Cloud Funding Platform</h4>
        <div className="intro__background intro__background--left"></div>
        <div className="intro__background intro__background--right"></div>
    </section>
)
    }

return (
    <div>
       

    
        <section className="hero">
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
        </section>
  
    </div>
)
}

