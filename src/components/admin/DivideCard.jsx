import React from "react";
import { useState, useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import { green, pink } from '@mui/material/colors';

import { getWriterName } from "../../api/admin";

function DivideCard(props) {

    const [name, setName] = useState("");
    useEffect(()=>{
        try{
            getWriterName(setName, props.item.writerId);
            console.log(props);
        }catch(e){
            console.log(e);
        }
    },[])

    return (
        <div style={{padding:"10px", marginLeft:"10px"}}>
            {
                props.isCheck == "ok" ?
                <div>
                    <h2>작품명 : {props.item.contentName}</h2>
                    <h3>작가명 : {name}</h3>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <Avatar sx={{ bgcolor: pink[500] }}> ￦ </Avatar> 
                        <p style={{padding:"10px"}}><b>총 수익금 : {parseInt(props.item.contentSum).toLocaleString()} 원</b></p>
                    </div> 
                </div> :
                <div>
                    <h2>작품명 : {props.item.contentName}</h2>
                    <h3>작가명 : {name}</h3>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <Avatar> ￦ </Avatar> 
                        <p style={{padding:"10px"}}><b>미달성률 : {100 - (parseInt(props.item.contentSum) / parseInt(props.item.target)) * 100 } %</b></p>
                    </div>  
                </div>
            }
        </div>
    )
}

export default DivideCard;