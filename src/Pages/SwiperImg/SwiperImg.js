import React from 'react'
import './style.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {Autoplay} from 'swiper'
import SwipImg1 from './../../Assets/Images/aaa1.png'
import SwipImg2 from './../../Assets/Images/bbb1.jpg'
import SwipImg3 from './../../Assets/Images/bbb3.png'

function SwiperImg() {
    return (
        <div className="swiper-section">
            <div className="swiper-box">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    modules={[Autoplay]}
                    className="mySwiper swiper-box-container"
                >
                    <SwiperSlide className="swiper-slide-style">
                        <div className="main-right-img">
                            <img src={SwipImg1} alt={'allavitti krem'}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide-style">
                        <div className="main-right-img">
                            <img src={SwipImg2} alt={'allavitti krem'}/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide-style">
                        <div className="main-right-img">
                            <img src={SwipImg3} alt={'allavitti krem'}/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default SwiperImg;
