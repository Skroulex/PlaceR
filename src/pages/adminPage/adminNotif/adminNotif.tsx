import React, {ReactInstance, useRef, useState} from 'react';

import classes from "./adminNotif.module.scss"
import {Button} from "@mui/material";
import AddPhoto from "../../../assets/admin/addPhoto.png"
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {schema} from "../../../utils/validations/adminEditorForm";
import {InferType} from "yup";
import AdminButton from "../UI/adminButton/adminButton";
import AdminMenu from "../UI/adminMenu/adminMenu";
import AdminTextArea from "../UI/adminTextArea/adminTextArea";
import {Link, useLocation} from "react-router-dom";
import content from "*.svg";
import ReactToPrint, {PrintContextConsumer, useReactToPrint} from "react-to-print";
import Print from '../../../assets/admin/print.svg'

const AdminNotif = React.forwardRef((props, ref) => {

    const info = [
        {
            id: 1,
            name: 'Эшимбеков Джалиль',
            date: '25.01.01',
            time: '18:00',
            amount: 3,
            table: 'C1'
        },
        {
            id: 2,
            name: 'Кушбеков Илим',
            date: '25.01.01',
            time: '11:00',
            amount: 4,
            table: 'В2'
        },

    ]

    const location = useLocation()

    const routes = [
        {
            name: "Бронь столика /",
            route: "/admin/notification"
        },
        {
            name: "Предзаказ блюд",
            route: "/admin/notification/pre-order"
        },
    ]

    let componentRef = useRef(null)

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div className={classes.container}>
            <AdminMenu/>
            <div className={classes.right}>
                <div className={classes.right_content}>
                    <h4>Уведомления</h4>
                    {routes.map((item, index) => (
                        <Link to={item.route} key={index}
                              className={location.pathname === item.route ? classes.activeLink : ""}>
                            {item.name}
                        </Link>
                    ))}
                    <table ref={componentRef}>
                        <div>
                        <tr>
                            <th>№</th>
                            <th>Фамилия Имя</th>
                            <th>Дата</th>
                            <th>Время</th>
                            <th>Кол-во персон</th>
                            <th>Столик</th>
                        </tr>
                        {info.map(item => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.date}</td>
                                <td>{item.time}</td>
                                <td>{item.amount}</td>
                                <td>{item.table}</td>
                            </tr>
                        ))}
                        </div>
                    </table>
                    <div className={classes.print}>
                        <div className={classes.print_svg}>
                            <img src={Print} alt=""/>
                            <p>Печать</p>
                        </div>
                        <button className={classes.btn_decline}>Отклонить</button>
                        <button className={classes.btn_accept} onClick={handlePrint}>Принять</button>
                    </div>
                </div>
            </div>
        </div>
    );
});
export default AdminNotif;
