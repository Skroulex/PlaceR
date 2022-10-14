


import React from "react";
import Card from 'react-credit-cards'
// import {TextFieldd} from "../registrationPage/components/TextField";
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate,
    formatFormData
} from "./utils/utils";
import styles2 from './cards.module.scss'
import styles from './forCarta.module.scss'
import "react-credit-cards/es/styles-compiled.css";
import {Button, TextField,Input, InputBase} from "@mui/material";
// import ThisInput from "./ThisInput";
// import {Input, useStyles} from '@chakra-ui/react';
//MUI CONST
// const useStyles = makeStyles(theme=>({
//     root:{
//         "& > *":{
//             margin: theme.spacing(1),
//             width: "25ch"
//         }
//     },
//     textField:{
//         border: "1px solid white"
//     }
// }))
//

export default class Appo extends React.Component {
    state = {
        number: "",
        name: "",
        expiry: "",
        cvc: "",
        issuer: "",
        focused: "",
        formData: null
    };

    handleCallback = ({ issuer }, isValid) => {
        if (isValid) {
            this.setState({ issuer });
        }
    };

    handleInputFocus = ({ target }) => {
        this.setState({
            focused: target.name
        });
    };

    handleInputChange = ({ target }) => {
        if (target.name === "number") {
            target.value = formatCreditCardNumber(target.value);
        } else if (target.name === "expiry") {
            target.value = formatExpirationDate(target.value);
        } else if (target.name === "cvc") {
            target.value = formatCVC(target.value);
        }

        this.setState({ [target.name]: target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { issuer } = this.state;
        const formData = [...e.target.elements]
            .filter(d => d.name)
            .reduce((acc, d) => {
                acc[d.name] = d.value;
                return acc;
            }, {});

        this.setState({ formData });
        this.form.reset();
    };


    render() {
        const { name, number, expiry, cvc, focused, issuer, formData } = this.state;
        // @ts-ignore
        // @ts-ignore
        return (
            <div key="Payment" >
                <div className="App-payment" style={{marginBottom:"-200px"}}>
                    <div className={styles.special}>
                        <div className={styles.againSpecial}>

                            <Card
                                number={number}
                                name={name}
                                expiry={expiry}
                                cvc={cvc}
                                focused={focused}
                                callback={this.handleCallback}
                                // className={styles.carta}
                            />
                        </div>

                    </div>
                    <div className={styles.allInputs}>
                        <div className={styles2.data}>
                            <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
                                <div className="form-group" >
                                    <Input
                                        variant="standard"
                                        type="tel"
                                        name="number"
                                        // className={styles.classes}
                                        placeholder="Card Number"
                                        pattern="[\d| ]{16,22}"
                                        required
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleInputFocus}
                                        sx={{
                                            width:300,
                                            borderBottomColor:"white",
                                            backGroundColor:"white",
                                            color:"white"
                                        }}
                                    />


                                    {/*<Input variant='flushed' placeholder='Flushed' />*/}
                                    {/*<small>E.g.: 49..., 51..., 36..., 37...</small>*/}
                                </div>
                                <div className="form-group">
                                    <Input
                                        variant="standard"

                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Name"
                                        required
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleInputFocus}
                                        sx={{
                                            width:300,
                                            borderBottomColor:"white",
                                            backGroundColor:"white",
                                            color:"white"
                                        }}
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <Input
                                            variant="standard"
                                            sx={{
                                                color:"white"
                                            }}
                                            type="tel"
                                            name="expiry"
                                            className="form-control"
                                            placeholder="Valid T"
                                            pattern="\d\d/\d\d"
                                            required
                                            onChange={this.handleInputChange}
                                            onFocus={this.handleInputFocus}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <Input
                                            variant="standard"
                                            sx={{
                                                color:"white"
                                            }}
                                            type="tel"
                                            name="cvc"
                                            className="form-control"
                                            placeholder="CVC"
                                            pattern="\d{3,4}"
                                            required
                                            onChange={this.handleInputChange}
                                            onFocus={this.handleInputFocus}
                                        />
                                    </div>
                                </div>
                                <input type="hidden" name="issuer" value={issuer} />
                                <div className="form-actions">
                                    <button
                                        // variant="contained"
                                        // className="btn btn-primary btn-block"
                                        className={styles.btn_block}
                                        // onClick={console.log( formData: any[]):void }
                                    >Сохранить</button>
                                </div>
                            </form>

                        </div>

                    </div>

                    {formData && (
                        <div className="result">
                            {formatFormData(formData).map((d, i) =>
                                <>
                                    <div className={styles2.data3}>
                                    <h3 className={styles.ache} key={i}>{d}</h3>


                                </div>
                                    </>
                                )}
                        </div>

                    )}
                    {/*<hr style={{ margin: "60px 0 30px" }} />*/}
                    {/*<div className="App-badges">*/}


                    {/*</div>*/}
                </div>

            </div>
        );
    }
}
