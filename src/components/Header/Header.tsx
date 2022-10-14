import React from 'react';
import s from "./Header.module.scss"
import {Link} from "react-router-dom";

import Logo from "../../assets/Header/logo.svg"
import Person from "../../assets/Header/person.svg"
import HeaderContent from "./components/HeaderContent";
import HamburgerMenu from "./components/HamburgerMenu/HamburgerMenu";

const Header = () => {

    const nav = [
        {
            name: "О нас",
            route: "/about",
        },
        {
            name: "Бронь",
            route: "/reservation",
        },
        {
            name: "Меню",
            route: "/menu",
        },
        {
            name: "Регистрация",
            route: "/registration",
        },
        {
            name: <img src={Person} alt=""/>,
            route: "/personal-area",
        },
    ]

    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <Link className={s.main_link} to={"/"}> <img src={Logo} alt=""/>PlaceR</Link>
                <nav>
                    {nav.map((item, index) => (
                        <HeaderContent name={item.name} route={item.route} key={index}/>
                    ))}
                </nav>
                <HamburgerMenu/>
            </div>
        </div>

    );
};

export default Header;
