// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import WriterButton from "./WriterButton";

export default function WriterDiv({writers}){
    console.log(writers);
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
                        <WriterButton writer={item} key={index}/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
      </div>
    );
}            
