
import React, {useRef, useState} from 'react';
import styles from './HamburgerMenu.module.scss';
import classNames from 'classnames';
import HamburgerIcon from './HamburgerIcon';
import {Link} from "react-router-dom";
import classes from "../../Header.module.scss";
import logo from "../../../../assets/Header/logo.svg"

const nav = [
    {
        name: "О нас",
        route: "/about",
    },
    {
        name: "Бронь",
        route: "/video",
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
        name: "Личный кабинет",
        route: "/personal-area",
    },
]

function HamburgerMenu() {
    const [isOpen, setOpen] = useState(false);
    const menuRef = useRef(null);

    return (
        <div className={styles.hamburger}>
            <HamburgerIcon isOpen={isOpen} setOpen={setOpen}/>
            <div
                onClick={() => setOpen(false)}
                className={classNames(styles.menu, {
                    [styles.menuOpen]: isOpen === true
                })}
                ref={menuRef}
            >
                    <div className={styles.links}>
                        {nav.map(item => (
                            <Link className={styles.link} to={item.route}>{item.name}</Link>
                        ))}
                    </div>
            </div>
        </div>
    );
}

export default HamburgerMenu;
