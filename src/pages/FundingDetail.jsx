import styled from "styled-components";
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import SwiperFlipDiv from "../components/SwiperFlipDiv";
import { ContainerBody } from "../styles/BodyStyle";
import DetailTimeline from "../components/DetailTimeline";

export default function FundingDetail(){
    return(
        <div>
            <MenuBar/>
            <ContainerBody>
                <SwiperFlipDiv/>
                <RowDiv>
                    <DetailTimeline/>
                </RowDiv>
            </ContainerBody>
            <Footer/>
        </div>
    );
}

const RowDiv = styled.div`
    display: flex;
    width: 100%;
`

const Timeline = styled.div`

`