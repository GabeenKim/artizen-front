import Footer from "../components/Footer";
import GalleryDiv from "../components/GalleryDiv";
import MenuBar from "../components/MenuBar";
import SwiperDiv from "../components/SwiperDiv";
import { ContainerBody, LastOuterContainer } from "../styles/BodyStyle";
import WriterDiv from "../components/home/WriterDiv";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { useNavigate } from "react-router-dom";
import{gsap} from 'gsap';
import {useEffect,useState} from 'react';
import '../styles/home.scss'
import { getEndedContents, getNotableContents, getNotableContents2 } from "../api/funding";
import GalleryRecommDiv from "../components/GalleryRecmmDiv";

export default function Home(){
    const navigate = useNavigate();

    var list = ["/img/mainLogo.png", "https://picsum.photos/1000/600"];
    var link = ["/intro", "/event"]
    var widths1 = ["25%", "25%", "50%"]
    var widths2 = ["50%", "25%", "25%"]

    const actions = [
        { icon: <TrendingUpIcon />, name: '투자 컨텐츠 작성하기', link: '/funding-write' },
        { icon: <CardGiftcardIcon />, name: '후원 컨텐츠 작성하기', link: '/support-write' },
    ];

    const [notableContents, setNotableContents] = useState([]);
    const [notableContents2, setNotableContents2] = useState([]);
    const [endedContents, setEndedContents] = useState([]);

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
  } 
  else {
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

    getNotableContents()
    .then((res)=>res.json())
    .then((res)=>setNotableContents(res))
    .catch((e)=>console.log(e));

    getNotableContents2()
    .then((res)=>res.json())
    .then((res)=>setNotableContents2(res))
    .catch((e)=>console.log(e));

    getEndedContents()
    .then((res)=>res.json())
    .then((res)=>setEndedContents(res))
    .catch((e)=>console.log(e))
  }, []);

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
    <LastOuterContainer>
        <MenuBar/>
        <ContainerBody>
            <SwiperDiv height={350} list={list} link={link}/>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", marginTop:"20px"}}>
            <p>주목할만한 작가</p>
            <WriterDiv/>
            </div>
            <div style={{display:"flex", justifyContent:"center", width:"100%"}}>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", width:'70%'}}>
            &nbsp;
            <div style={{height: '100px', width:'10px'}}></div>
            {/* {
                localStorage.getItem("name") != null ?
                <GalleryRecommDiv fundingData={notableContents} supportData={notableContents2} widths={widths2}/> : null
            } */}
            <GalleryDiv title={"주목할만한 펀딩 목록"} widths={widths1} data={notableContents} isFunding={true}/>
            <GalleryDiv title={"주목할만한 후원 목록"} widths={widths2} data={notableContents2} isFunding={false}/>
            <GalleryDiv title={"완료된 펀딩"} widths={widths1} data={endedContents} isEnded={true}/>
            </div>
            </div>
            {
                localStorage.getItem('writerId') &&
                <SpeedDial
                ariaLabel="SpeedDial openIcon example"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon openIcon={<EditIcon />} />}
                >
                {actions.map((action) => (
                    <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={()=>{navigate(action.link)}}
                    />
                ))}
                </SpeedDial>
            }

        </ContainerBody>
        <Footer/>
    </LastOuterContainer>
)
}