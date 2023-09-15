import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import { ContainerBody } from "../styles/BodyStyle";

export default function EventPage(){
    return (
        <div>
            <MenuBar/>
            <ContainerBody>
                이벤트 페이지
            </ContainerBody>
            <Footer/>
        </div>
    )
}