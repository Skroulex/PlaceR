import React from 'react';

import {Link, useLocation} from "react-router-dom";
import {IHeader} from "../../../types/header";

import s from "../Header.module.scss"


const HeaderContent = ({name, route}: IHeader) => {

    const location = useLocation()

    return (
        <Link className={location.pathname === route ? s.activeLink : ""} to={route}>{name}</Link>
    );
};

export default HeaderContent;
