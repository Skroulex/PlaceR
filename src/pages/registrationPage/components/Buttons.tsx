import React from 'react';
import face from '../assets/facebook.svg'
import go from '../assets/google.svg'
// import line from '../assets/Line.svg'
import {TextField, Button} from "@mui/material";
import '../main.css'
// import {NavLink} from 'react-router-dom'

const Buttons =()=> {
    return (
            <div className="regist">
                <h1>Загеристироваться в PlaceR</h1>
                <div className="btns">
                    <img src={face} alt=""/>
                    <img src={go} alt=""/>
                </div>
                <p>или</p>

                {/*<div className="input">*/}
                    {/*<input className="inputik" type="text"/>*/}
                    {/*<img src={line} alt=""/>*/}

                {/*</div>*/}
                <div className="inputs1">

                    <TextField id="standard-basic" label="Имя" variant="standard" />
                    <TextField id="standard-basic" label="дд мм гг " variant="standard" />
                </div>
                <div className="inputs1">

                    <TextField id="standard-basic" label="Фамилия" variant="standard" />
                    <TextField id="standard-basic" label="Почта" variant="standard" />
                </div>
                <div className="inputs1">

                    <TextField id="standard-basic" label="Номер телефона" variant="standard"/>
                    <TextField id="standard-basic" label="Пароль" variant="standard"  />
                </div>

                <Button variant="contained" className="button">
                    Зарегистрироваться
                </Button>
                <div className="vxod">
                    <p>Уже зарегистрированы?</p>
                    <h5 style={{color:"#FFAA5B"}}>Войти</h5>
                </div>

            </div>
    );
}
export default Buttons;