import styled from "styled-components";
import SuccessFunding from "./SuccessFunding";
import Investors from "./Investors";
import DivideCompo from "./DivideCompo";

export default function DividePage(props){

    return(
        <Container>
            <DivideCompo isSuccess={props.isSuccess} contentId={props.contentId} item={props.item} 
            setOks={props.setOks} oks={props.oks}
            setFails={props.setFails} fails={props.fails} />
        </Container>
    )
}

const Container = styled.div`
    width: 70%;
    height: 80%;
    padding: 100px 50px;
    display: flex;
    justify-content: center;
    background-color: white;
`