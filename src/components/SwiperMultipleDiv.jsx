import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import GalleryFicture from './GalleryFicture';
import styled from 'styled-components';

export default function SwiperMultipleDiv({data, type}){
    return (
        <SwiperContainer>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    data && data.map((item, index) => (
                        <SwiperSlide id={index}>
                            <GalleryFicture key={item.contentId} width={"100%"} data={item} isFunding={type==='funding'?true:false}></GalleryFicture>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </SwiperContainer>
    )
}

const SwiperContainer = styled.div`
    margin: 0px 100px;
`