import React, {useState} from 'react';
import {Formik, Form} from 'formik';
import {TextFieldd} from './TextField';
import * as Yup from 'yup';
import '../main.css'
import face from '../assets/facebook.svg'
import go from '../assets/google.svg'
import {NavLink, useNavigate} from "react-router-dom";
import {Button, Input} from '@mui/material'
import '../mediaAdaptive/mediaAdaptive.css'
export const Inputs = () => {
    const navigate=useNavigate()

    const info = [
        {
            photo: go,

        },{
            photo:face
        }
    ]

    const [message, setMessage] = useState('');
    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 charaters')
            .required('Password is required'),
        number: Yup.number()
            .integer('phoneNumber is invalid')
            .required('Number is required')

        // confirmPassword: Yup.string()
        //     .oneOf([Yup.ref('password'), null], 'Password must match')
        //     .required('Confirm password is required'),
    })
    // const handleChange = (event) => {
    //     setMessage(event.target.value);
    // };
    // const handleClick = () => {
    //     // 👇️ clear input value
    //     setMessage('');
    // };
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                date:'',
                // confirmPassword: '',
                number: ''
            }}
            validationSchema={validate}
            onSubmit={(values,{resetForm}) => {
                console.log(values);
                // resetForm({values:''})
                navigate("/cards")
            }}

        >
            {formik => (
                <>
                    <div className="regist">
                        <h1 className="my-4 font-weight-bold .display-4">Зарегистрироваться в PlaceR</h1>
                        <div className="btns">
                            <img src={info[1].photo} alt=""/>
                            <img src={info[0].photo} alt=""/>
                        </div>
                        <p>или</p>

                        <Form>
                            <div className="inputs1">

                                <TextFieldd placeholder="Имя" name="firstName" type="text"  sx={{
                                    borderBottomColor:"white",
                                    backGroundColor:"white",
                                    color:"white"
                                }}/>
                                <TextFieldd placeholder="дд мм гг" name="date" type="number" sx={{
                                    borderBottomColor:"white",
                                    backGroundColor:"white",
                                    color:"white"
                                }}/>
                            </div>
                            <div className="inputs1">

                                <TextFieldd placeholder="Фамилия" name="lastName" type="text" sx={{
                                    borderBottomColor:"white",
                                    backGroundColor:"white",
                                    color:"white"
                                }}/>
                                <TextFieldd  placeholder="Почта " name="email" type="email" sx={{
                                    borderBottomColor:"white",
                                    backGroundColor:"white",
                                    color:"white"
                                }}/>
                            </div>

                            <div className="inputs1">

                                <TextFieldd placeholder="Пароль" name="password" type="password" sx={{
                                    borderBottomColor:"white",
                                    backGroundColor:"white",
                                    color:"white"
                                }}/>
                                <TextFieldd placeholder="Номер телефона" name="number" type="number" sx={{
                                    borderBottomColor:"white",
                                    backGroundColor:"white",
                                    color:"white"
                                }}/>
                            </div>

                            <Button variant="contained"
                                    style={{
                                        borderRadius: 10,
                                        backgroundColor: "#BFFFF3",
                                        padding: "9px 18px",
                                        fontSize: "15px",
                                        color: "black"
                                    }}
                                    className="btn btn-dark mt-3" type="submit">


                                 Зарегаться

                            </Button>
                        </Form>
                    </div>
                    <div className="vxod">
                        <p>Уже зарегистрированы?</p>
                        <NavLink

                            to="/join"
                            style={{
                                color: "#FFAA5B",
                                textDecoration: "none",
                                fontWeight: "700"
                            }}>Войти</NavLink>
                    </div>
                </>
            )}

        </Formik>
    )
}
