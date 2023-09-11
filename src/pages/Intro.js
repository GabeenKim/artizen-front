import styled from "styled-components";
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import { ContainerBody } from "../styles/BodyStyle";

export default function Intro(){
    return (
        <div>
            <MenuBar/>
            <ContainerBody>
                <ImgDiv><img style={{width:"50%"}} src="/img/mainLogo2.png"/></ImgDiv>
                <Div>
                    <DetailDiv>
                        <p>안녕하세요. 예술을 넘어 사람을 보다 - Artizen입니다.</p>
                        <p>저희는 창의적 아이템을 가진 초기 기업가의 펀딩부터 오픈 예정의 영화, 공연, 전시에 직접 투자하고 수익금을 얻을 수 있는 플랫폼입니다.</p>
                        <p>관심있는 분야의 컨텐츠에 대해 단순히 소비만 하는 것이 아닌 직접 투자와 후원을 해보는 것은 어떨까요?</p>
                    </DetailDiv>
                    <DetailDiv>
                        <h1>투자 가이드</h1>
                    </DetailDiv>
                </Div>
            </ContainerBody>
            <Footer/>
        </div>
    )
}

const ImgDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const DetailDiv = styled.div`
    width: 50%;
`