import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


//배너 크기, 이미지 경로, 클릭 시 연결되는 주소(연결할 거 없으면 #으로 입력)
export default function SwiperDiv({height, list, link}){
    return(
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {   
                    list &&
                    list.map((item, index)=>(
                        <SwiperSlide id={index}>
                            <Banner height={height}>
                                <Link to={link[index]}>
                                    <Img src={item}/>
                                </Link>
                            </Banner>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
}


const Banner = styled.div`
    display: flex;
    justify-content: center;
    height: 
    ${({ height }) =>
        height
    }px;
`
const Img = styled.img`
    objcet-fit: contain;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50vw;

`