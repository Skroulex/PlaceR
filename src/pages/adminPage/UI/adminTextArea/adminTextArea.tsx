import React from 'react';

import classes from "./adminTextArea.module.scss"

const AdminTextArea = () => {

    return (
        <div className={classes.textArea}>
            <textarea maxLength={80}/>
        </div>
    );
};

export default AdminTextArea;
