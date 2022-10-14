import React from 'react';

import classes from "./adminMenu.module.scss"
import {adIcon, footer, editIcon, estIcon,bell, photoIcon, } from "../../../../assets/admin/adminPageIcons";
import {Link, useLocation} from "react-router-dom";

const AdminMenu = () => {

    const routes = [
        {
            icon: photoIcon,
            route: "/admin/editor",
            name: "Редактор"
        },
        {
            icon: adIcon,
            route: "/admin/advertising",
            name: "Реклама"
        },
        {
            icon: bell,
            route: "/admin/notification",
            name: "Уведомления"
        },

        {
            icon: footer,
            route: "/admin/footer",
            name: "Подвал"
        },
        // {
        //     icon: contactsIcon,
        //     route: "/admin/contacts",
        //     name: "Контакты"
        // },
        {
            icon: editIcon,
            route: "/admin/edit",
            name: "Изменить"
        },
    ]

    const location = useLocation()

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.links}>
                    {routes.map((item, index) => (
                        <Link className={location.pathname === item.route ? classes.activeLink : ""} key={index}
                              to={item.route}>
                            <img src={item.icon} alt="adminIcon"/>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminMenu;
