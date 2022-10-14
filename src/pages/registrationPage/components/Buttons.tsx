// import React ,{FC, ReactNode} from 'react';
// import face from '../assets/facebook.svg'
// import go from '../assets/google.svg'
// // import line from '../assets/Line.svg'
// import { Button} from "@mui/material";
// import '../main.css'
// import MainPage from '../../mainPage/mainPage';
// import {NavLink} from 'react-router-dom'
// import {Formik, Form, useField} from "formik";
// import {userSchema} from '../yupReg/userSchema'
// import * as yup from 'yup';
// import {useForm} from "react-hook-form";
// import {TextField} from "./TextField";
//
// const Buttons:FC<any>  = () => {
//     // @ts-ignore
//     // const [field, meta]= useField()
//     //
//     // const createUser = async (event) => {
//     //     event.preventDefault()
//     //     let formData = {
//     //         name: event.target[0].value,
//     //         email: event.target[1].value,
//     //         password: event.target[2].value
//     //     }
//     // }
//     // const isValid =  userSchema.isValid(formData)
//     // const {
//     //     register,
//     //     formState:{
//     //         errors,
//     //     },
//     //     handleSubmit,
//     // }= useForm()
//     // const styles = theme => ({
//     //     textField: {
//     //         width: '90%',
//     //         marginLeft: 'auto',
//     //         marginRight: 'auto',
//     //         paddingBottom: 0,
//     //         marginTop: 0,
//     //         fontWeight: 500
//     //     },
//     //     input: {
//     //         color: 'white'
//     //     }
//     // });
// //     const onSubmit =(data)=>{
// //     alert(JSON.stringify(data))}
// // }
//
//
//     const validate = yup.object({
//         firstName: yup.string()
//             .max(15, 'Must be 15 characters or less')
//             .required('Required'),
//         lastName: yup.string()
//             .max(20, 'Must be 20 characters or less')
//             .required('Required'),
//         email: yup.string()
//             .email('Email is invalid')
//             .required('Email is required'),
//         password: yup.string()
//             .min(6, 'Password must be at least 6 charaters')
//             .required('Password is required'),
//         confirmPassword: yup.string()
//             .oneOf([yup.ref('password'), null], 'Password must match')
//             .required('Confirm password is required'),
//     })
//     return (
//         <>
//             < div className="regist">
//                 <h1>Загеристироваться в PlaceR</h1>
//                 <div className="btns">
//                     <img src={face} alt=""/>
//                     <img src={go} alt=""/>
//                 </div>
//                 <p>или</p>
//
//                 <Formik
//
//                     initialValues={{
//                         firstName: '',
//                         lastName: '',
//                         email: '',
//                         password: '',
//                         date: '',
//                         phone: ''
//                     }}
//                     validationSchema={validate}
//                     onSubmit={values => {
//                         console.log(values)
//                     }}
//                         >
//                         {formik =>(
//                 <Form>
//
//                     <div className="all">
//
//
//                         {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
//
//
//                         <div className="inputs1">
//                             {/*<TextField*/}
//                             {/*    style={{*/}
//                             {/*        width:"280px",*/}
//                             {/*        // backgroundColor:"#FFFFFF"*/}
//                             {/*        color:"white",*/}
//                             {/*    }}*/}
//                             {/*    InputProps={{*/}
//                             {/*        style: {*/}
//                             {/*            color:"white",*/}
//                             {/*            borderColor:"white",*/}
//                             {/*            borderBottomColor:"white"*/}
//                             {/*        }*/}
//                             {/*    }}*/}
//                             {/*    InputLabelProps={{*/}
//                             {/*        style: { color: '#fff' },*/}
//                             {/*    }}*/}
//
//                             {/*    // InputProps={{*/}
//                             {/*    //    color:"white"*/}
//                             {/*    // }}*/}
//                             {/*    id="standard-basic" label="Имя" variant="standard"/>*/}
//
//
//                             {/*<TextField*/}
//                             {/*    style={{*/}
//                             {/*        width:"280px",*/}
//                             {/*        // backgroundColor:"#FFFFFF"*/}
//
//                             {/*    }}id="standard-basic" label="дд мм гг " variant="standard"/>*/}
//                             <div className="inputs1"/>
//
//                         </div>
//                         <div className="inputs1">
//
//                             // <TextField id="standard-basic" label="Фамилия" variant="standard"/>
//                             // <TextField id="standard-basic" label="Почта" variant="standard"/>
//
//                             <TextField label="Email" name="email" type="email"/>
//                             <TextField label="password" name="password" type="password"/>
//                         </div>
//                         <div className="inputs1">
//                             // <TextField id="standard-basic" label="Номер телефона" variant="standard"/>
//                             // <TextField id="standard-basic" label="Пароль" variant="standard"/>
//
//                             <TextField label="Confirm Password" name="confirmPassword" type="password"/>
//                             <TextField label="Confirm Password" name="confirmPassword" type="password"/>
//                         </div>
//                         {/*</form>*/}
//
//                         {/*</Form>*/}
//                     </div>
//                 </Form>
//
//                 )}
//
//
//             </Formik>
//             <Button variant="contained" className="button"
//                     style={{
//                         borderRadius: 10,
//                         backgroundColor: "#C6FFFF",
//                         padding: "9px 18px",
//                         fontSize: "15px",
//                         color: "black"
//                     }}>
//                 Зарегистрироваться
//             </Button>
//             <div className="vxod">
//                 <p>Уже зарегистрированы?</p>
//                 <NavLink to="/"
//                          style={{
//                              color: "#FFAA5B",
//                              textDecoration: "none",
//                              fontWeight: "700"
//                          }}>Войти</NavLink>
//             </div>
//         </div>
//
//         </>
//     );
// }
// export default Buttons;




//
//
//
// import React from 'react';
// import { Formik, Form } from 'formik';
// // import { TextField } from './TextField';
// import {TextField} from "@mui/material";
// import * as Yup from 'yup';
//
// export const Buttons = () => {
//     const validate = Yup.object({
//         firstName: Yup.string()
//             .max(15, 'Must be 15 characters or less')
//             .required('Required'),
//         lastName: Yup.string()
//             .max(20, 'Must be 20 characters or less')
//             .required('Required'),
//         email: Yup.string()
//             .email('Email is invalid')
//             .required('Email is required'),
//         password: Yup.string()
//             .min(6, 'Password must be at least 6 charaters')
//             .required('Password is required'),
//         confirmPassword: Yup.string()
//             .oneOf([Yup.ref('password'), null], 'Password must match')
//             .required('Confirm password is required'),
//     })
//     return (
//         <Formik
//             initialValues={{
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 password: '',
//                 confirmPassword: ''
//             }}
//             validationSchema={validate}
//             onSubmit={values => {
//                 console.log(values)
//             }}
//         >
//             {formik => (
//                 <div>
//                     <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
//                     <Form>
//                         <TextField label="First Name" name="firstName" type="text" />
//                         <TextField label="last Name" name="lastName" type="text" />
//                         <TextField label="Email" name="email" type="email" />
//                         <TextField label="password" name="password" type="password" />
//                         <TextField label="Confirm Password" name="confirmPassword" type="password" />
//                         <button className="btn btn-dark mt-3" type="submit">Register</button>
//                         <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
//                     </Form>
//                 </div>
//             )}
//         </Formik>
//     )
// }

export {}