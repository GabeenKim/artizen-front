import styled from "styled-components";
import LoginCompo from "../components/LoginCompo";

export default function Login(){
    return(
        <Body>
            <LoginCompo/>
        </Body>
    )
}

const Body = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: linear-gradient(135deg, $bg2, $bg1);
`