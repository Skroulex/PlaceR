// import Buttons from './components/Buttons'
// import {Inputs} from './components/Inputs'
import '../main.css'
import React, {useState} from 'react';
import {Formik, Form} from 'formik';
import {TextFieldd} from '../../registrationPage/components/TextField';
import * as Yup from 'yup';
import '../main.css'
import face from '../assets/facebook.svg'
import go from '../assets/google.svg'
import {NavLink, useNavigate} from "react-router-dom";
import {Button} from '@mui/material'
const Join =()=> {
    // @ts-ignore

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

            email: Yup.string()
                .email('Email is invalid')
                .required('Email is required'),

            password: Yup.string()
                .min(6, 'Password must be at least 6 charaters')
                .required('Password is required'),
             name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required( ' name is Required'),
            lastName: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required(' last name is Required'),


        })
        // const handleChange = (event) => {
        //     setMessage(event.target.value);
        // };
        // const handleClick = () => {
        //     // 👇️ clear input value
        //     setMessage('');
        // };
    return (
        <div className="wrapper">
            <Formik
            initialValues={{
            email: '',
            password: '',
                name:'',
                lastName:''
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
            <h1 className="my-4 font-weight-bold .display-4">Войти в PlaceR</h1>
            <div className="btns">
            <img src={info[1].photo} alt=""/>
            <img src={info[0].photo} alt=""/>
            </div>
            <p>или</p>

            <Form>
            <div className="inputs1">

            <TextFieldd placeholder="Почта" name="email" type="email"  sx={{color:"white"}}/>
            <TextFieldd placeholder="Пароль" name="password" type="password" sx={{color:"white"}}/>


            </div>
                <div className="inputs1">
                    <TextFieldd placeholder="Name" name="name" type="text" sx={{color:"white"}}/>
                    <TextFieldd placeholder="lastName" name="lastName" type="text" sx={{color:"white"}}/>
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


            Войти

            </Button>
            </Form>
            </div>
            <div className="vxod">

            </div>
            </>
            )}

            </Formik>



        </div>
    );
}

export default Join;