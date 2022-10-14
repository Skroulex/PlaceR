import React from 'react';
import s from './bookingPage.module.scss'

import chicken from '../../assets/bookingPage/chicken.png'
import {Link} from "react-router-dom";

const BookingPage = () => {
    return (
        <div className={s.container}>
            <div className={s.image}>
                <img  src={chicken} alt="chicken"/>
            </div>
            <div className={s.text}>
                <p className={s.title}>Бронирование столиков онлайн!</p>
                <p className={s.subtitle}>Всего за пару минут вы можете зарезервировать столик онлайн в любом из наших ресторанов</p>
                <Link to='/reservation'>Забронировать столик</Link>
            </div>
        </div>
    );
};

export default BookingPage;
