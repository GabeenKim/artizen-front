import { useEffect, useState } from "react"
import { styled } from "styled-components"
import GalleryFicture from "./GalleryFicture";

export default function GalleryDiv({widths, data}){
    return(
        <PictureDiv>   
            <GalleryFicture width={widths[0]} data={data[0]}/>
            <GalleryFicture width={widths[1]} data={data[1]}/>
            <GalleryFicture width={widths[2]} data={data[2]}/>
        </PictureDiv>
    )
}

const PictureDiv = styled.div`
    display: flex;
    margin: 20px 150px;
`