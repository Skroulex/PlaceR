import React from 'react';
import "@mui/material";
import {makeStyles, InputBase} from "@mui/material";
//MUI CONST
const useStyles = makeStyles(theme => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: "25ch"
        }
    },
    textField: {
        border: "1px solid white"
    }

}))
//
function ThisInput() {
    const classes= useStyles()
    return (
        <InputBase
        className={classes.textField}
            variant="outlined"
        />
    );
}

export default ThisInput;