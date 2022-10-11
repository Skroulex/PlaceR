import React from 'react';

import classes from "./adminButton.module.scss"
import {IButton} from "../../../../types/admin";

const AdminButton = ({type}: IButton) => {
    return (
        <div className={classes.button}>
            <button type={type}>Опубликовать</button>
        </div>
    );
};

export default AdminButton;
