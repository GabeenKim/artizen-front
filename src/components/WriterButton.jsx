import { useState } from "react";
import styled from "styled-components"

export default function WriterButton({writer}){
    const [hover, setHover] = useState(false);
    
    console.log(writer.img)
    const randomImg = "/img/writer"+getRandomInt(0, 5)+".jpg";
    console.log(randomImg)
    return(
        <Button id={writer.id} isProgress={writer.isProgress}>
            <Img src={randomImg}></Img>
        </Button>
    )
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}


const Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 9999px;
    
`

const Button = styled.button`
    border-radius: 9999px;
    margin-bottom: 60px;
    margin-left: 60px;
    cursor: pointer;
    border-width: ${(props)=>props.isProgress?"2px":"0"};

    width: 110px;
    height: 110px;

    ${({isProgress}) => isProgress &&
        `
        border: 2px solid transparent;
        background-image: linear-gradient(#fff, #fff), 
        linear-gradient(to right, red 0%,  orange 100%);
        background-origin: border-box;
        background-clip: content-box, border-box;
        `
    }

    display: flex;
    justify-content: center;
    align-items: center;
    
    
`