import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import './mainPage.css'

import s from "./mainPage.module.scss"
import WelcomePage from "./components/welcomePage/welcomePage";
import ReservationPage from "../reservationPage/reservationPage";
import AboutPage from "./components/aboutPage/aboutPage";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
    return (
        <div className={s.s}>
            <Swiper
                className="mySwiper"
                spaceBetween={50}
                slidesPerView={1}
            >
                <SwiperSlide><WelcomePage /></SwiperSlide>

                <SwiperSlide><AboutPage /></SwiperSlide>

                <SwiperSlide><ReservationPage /></SwiperSlide>

                <SwiperSlide><WelcomePage /></SwiperSlide>

                <SwiperSlide><Footer/></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default MainPage;
