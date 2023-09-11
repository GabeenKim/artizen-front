import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyData } from "../assets/dummyData";
import SwiperMultipleDiv from "../components/SwiperMultipleDiv";
import MenuBar from "../components/MenuBar";
import { ContainerBody } from "../styles/BodyStyle";
import Footer from "../components/Footer";

export default function Contents(){
    const [data, setData] = useState([]);
    const {type} = useParams();
    console.log(type);
    var api = "";
    if(type === 'funding'){
        api = "http://localhost:9999/showAllFunding"
    }else if(type === 'support'){ 
        api = "http://localhost:9999/showAllSupport"
    }

    async function getData(url="", data={}){
        const response = await fetch(url, {
            method: "GET",   
        })
        return response.json();
    }

    useEffect(()=>{
        // getData(api).then((data) => {
        //     console.log(data);
        // });

        setData(dummyData);
        // console.log(data);
    }, []);
    
    return (
        <div>
            <MenuBar/>
            <ContainerBody>
            {
                type=='funding'?
                <h1>투자</h1>:
                type=='support'?
                <h1>후원</h1>: null
            }
            <h2>영화</h2>
            <SwiperMultipleDiv data={data}></SwiperMultipleDiv>
            <h2>공연</h2>
            <SwiperMultipleDiv data={data}></SwiperMultipleDiv>
            <h2>전시</h2>
            <SwiperMultipleDiv data={data}></SwiperMultipleDiv>
            </ContainerBody>
            <Footer/>
        </div>
    )
}