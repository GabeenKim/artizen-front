import { useNavigate } from "react-router-dom";
import styled from "styled-components"

export default function Footer(){
    return (
        <FooterContainer>
            <h3>Artizen</h3>
            <a href="https://github.com/kb-artizen"><img src="/img/github_logo.png"/></a>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding: 20px;
    background-color: #e0e7ff;
    width: 100%;
    bottom: 0px;
    position: absolute;

    img{
        width:30px;
    }
`;