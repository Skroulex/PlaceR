import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import s from "./mainPage.module.scss"
import WelcomePage from "./welcomePage/welcomePage";

const MainPage = () => {
    return (
        <div className={s.s}>
            <Swiper
                className="mySwiper"
                spaceBetween={50}
                slidesPerView={1}
            >
                <SwiperSlide><WelcomePage /></SwiperSlide>
                <SwiperSlide><WelcomePage /></SwiperSlide>
                <SwiperSlide><WelcomePage /></SwiperSlide>
                <SwiperSlide><WelcomePage /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default MainPage;
