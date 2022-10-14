// import React from 'react';
// import { ErrorMessage, useField } from 'formik';
// import {FC} from 'react ';
// // @ts-ignore
// export const TextField:FC<any> = ({ label, ...props }) => {
//     const [field, meta] = useField(props);
//     return (
//         <div className="mb-2">
//             <label htmlFor={field.name}>{label}</label>
//             <input
//                 className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
//                 {...field} {...props}
//                 autoComplete="off"
//             />
//             <ErrorMessage component="div" name={field.name} className="error" />
//         </div>
//     )
// }
// export {
import React,{FC} from 'react';
import { ErrorMessage, useField } from 'formik';
import {TextField, Input} from "@mui/material";
import '../main.css'
import styles from  '../../cardPage/cards.module.scss'
export const TextFieldd:FC<any> = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="mb-2">
            {/*<label htmlFor={field.name}>{label}</label>*/}
            {/*<div className="inputs1">*/}
                <Input
                    // className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                    {...field} {...props}
                    autoComplete="off"
                    variant="standard"
                    // inputProps={{
                    //     borderBottomColor:"white"
                    // }}
                    className={styles.inputReg}
                        // style={{
                        //             width:"280px",
                        //             // backgroundColor:"#FFFFFF",
                        //             borderBottomColor:"white !important",
                        //     color:"white"
                        //         }}
                />
            {/*<TextField*/}
            {/*    className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}*/}
            {/*    {...field} {...props}*/}
            {/*    autoComplete="off"*/}
            {/*    variant="standard"*/}
            {/*    label="Фамилия"*/}
            {/*/>*/}
            {/*</div>*/}
            {/*<div className="inputs1">*/}
            {/*    <TextField*/}
            {/*        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}*/}
            {/*        {...field} {...props}*/}
            {/*        autoComplete="off"*/}
            {/*        variant="standard"*/}
            {/*        label="Номер телефона"*/}
            {/*    /><TextField*/}
            {/*    className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}*/}
            {/*    {...field} {...props}*/}
            {/*    autoComplete="off"*/}
            {/*    variant="standard"*/}
            {/*    label="дд мм гг"*/}
            {/*/>*/}
            {/*</div>*/}
            {/*<div className="inputs1">*/}
            {/*    <TextField*/}
            {/*        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}*/}
            {/*        {...field} {...props}*/}
            {/*        autoComplete="off"*/}
            {/*        variant="standard"*/}
            {/*        label="Номер телефона"*/}
            {/*    /><TextField*/}
            {/*    className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}*/}
            {/*    {...field} {...props}*/}
            {/*    autoComplete="off"*/}
            {/*    variant="standard"*/}
            {/*    label="дд мм гг"*/}
            {/*/>*/}
            {/*</div>*/}


            <ErrorMessage component="div" name={field.name} className="error" />
        </div>
    )
}
