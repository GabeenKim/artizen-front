import styled from "styled-components";
import LoginCompo2 from "../components/login/LoginCompo2";

export default function Login(){
    return(
        <Body>
            <LoginCompo2/>
        </Body>
    )
}

const Body = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: linear-gradient(135deg, $bg2, $bg1);
`