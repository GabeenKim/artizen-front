import { useEffect, useState } from "react"
import styled from "styled-components"
import GalleryFicture from "./GalleryFicture";

export default function GalleryDiv({title, widths, data}){
    return(
        <PictureDiv>
            {/* <DetailTitle>{title}</DetailTitle> */}
            <GalleryFicture width={widths[0]} data={data[0]}/>
            <GalleryFicture width={widths[1]} data={data[1]}/>
            <GalleryFicture width={widths[2]} data={data[2]}/>
        </PictureDiv>
    )
}

const PictureDiv = styled.div`
    position: relative;
    display: flex;
    margin: 20px 150px;
`

const DetailTitle = styled.p`
    font-familiy: SUITE-Regular;
    -webkit-transform: rotate(90deg);
    -webkit-transform-origin: left top;
    -moz-transform: rotate(90deg);
    -moz-transform-origin: left top;
    -ms-transform: rotate(90deg);
    -ms-transform: left top;
    -o-transform: rotate(90deg);
    -o-transform-origin: left-top;
    transform: rotate(90deg);
    transform-origin: left top;

    position: absolute;
    // top: 0;
    // left: 100%;
    padding-top: 10%;
    padding-left: 90%;
    white-space: nowrap;
    // font-size: 40px;
    // color: yellow;
    text-align: center;
    line-height: 25px;
`