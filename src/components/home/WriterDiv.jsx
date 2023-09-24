// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination } from 'swiper/modules';
import WriterButton from "./WriterButton";
import { useState } from 'react';
import { Box, Grow } from '@mui/material';
import styled from 'styled-components';
import { writerRankingFetch } from '../../api/writer';

export default function WriterDiv(){
    const [hoverBtn, setHoverBtn] = useState();
    const [checked, setChecked] = useState(false);
    const [writers, setWriters] = useState([]);
    const [contents, setContents] = useState({});

    useState(()=>{
        // async function getWriterRank(){
        //     const res = await writerRanking();
        //     console.log(res);
        //     setWriters(res.data)
        // }
        // getWriterRank();

        writerRankingFetch()
        .then((res)=>res.json())
        .then((res)=>setWriters(res))
        .catch((e)=>console.log(e))
    }, [])


    // useEffect(()=>{
    //     console.log(hoverBtn)
    // }, [hoverBtn])  

    return(
        <div style={{width:"75%"}}>
            <Swiper
            slidesPerView={6}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            >
                {
                    writers &&
                    writers.map((item, index) => (
                        <SwiperSlide key={index}>
                            <WriterButton writer={item} index={index} key={index} setHoverBtn={setHoverBtn} setChecked={setChecked} contents={contents} setContents={setContents}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            {
                hoverBtn &&
                <Box sx={{ display: 'flex', height:"110px", padding:"0px 30px" }}>
                {
                    contents[hoverBtn] &&
                    contents[hoverBtn].map((item, index)=>(
                        <Grow
                        key={index}
                        in={checked}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(checked ? { timeout: 1000*index } : {})}
                        >
                        <ContentDiv>
                            <img src={item.image[0].imageUrl}/>
                            <div>#{item.contentName}</div>
                        </ContentDiv>
                        </Grow>
                    ))
                }
                </Box>
            }
        </div>
    );
}

const ContentDiv = styled.div`
    width: 150px;
    height: 150px;
    margin: 0 10px;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    img{
        width: 150px;
        height: 100px;
        object-fit: contain;
    }

    div{
        width: 100%;
        padding: 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`