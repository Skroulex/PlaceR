import React from 'react';
import styles from './cards.module.scss'
import mega from './assets/megapay.svg'
import master from './assets/mastercard logo.svg'
import o from './assets/o.svg'
import visa from './assets/vica logo.svg'
import bal from './assets/balance.svg';
import {TextFieldd} from "../registrationPage/components/TextField";
import * as Yup from 'yup';
import {Formik, Form} from 'formik';
import Karta from './Karta'

const CardsPage = () => {
    const validate1 = Yup.object({
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
    })
    return (
        <div className={styles.wrapper2}>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    number: ''
                }}
                validationSchema={validate1}
                onSubmit={(values,{resetForm}) => {
                    console.log(values);
                    // resetForm({values:''})
                }}

            >

                {formik =>(
                    <div className={styles.card}>
                        <Karta/>
                        <div className={styles.data2}>
                            <h1>Данные карты</h1>
                            <p>Эта карта будет использоваться в качестве способа оплаты по умолчанию для ваших следующих заказов </p>
                            <div className={styles.payment}>
                                <img src={visa}alt=""/>
                                <img src={master}alt=""/>
                                <img src={mega}alt=""/>
                                <img src={o}alt=""/>
                                <img src={bal}alt=""/>
                            </div>
                            {/*<Form>*/}
                            {/*    <div className="inputs">*/}
                            {/*        <TextFieldd placeholder="First Name" name="firstName" type="text" style={{*/}
                            {/*            borderBottomColor:"white !important",*/}
                            {/*            color:"white"*/}
                            {/*        }}/>*/}

                            {/*    </div>*/}
                            {/*</Form>*/}

                        </div>


                    </div>

                )}

            </Formik>
        </div>



    );
};

export default CardsPage;