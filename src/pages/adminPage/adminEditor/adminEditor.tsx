import React, {useState} from 'react';

import classes from "./adminEditor.module.scss"
import {Button} from "@mui/material";
import AddPhoto from "../../../assets/admin/addPhoto.png"
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {schema} from "../../../utils/validations/adminEditorForm";
import {InferType} from "yup";
import AdminButton from "../UI/adminButton/adminButton";
import AdminMenu from "../UI/adminMenu/adminMenu";
import AdminTextArea from "../UI/adminTextArea/adminTextArea";
import {Link, useLocation} from "react-router-dom";



const AdminEditor = () => {
    const location = useLocation()

    const routes = [
        {
            name: "Главная страница/",
            route: "/admin/editor"
        },
        {
            name: "О нас",
            route: "/admin/editor/about"
        },
    ]


    // const [addPhotos, {data = [], error}] = useAddPhotosMutation();

    const [value, setValue] = useState("1")

    type schemaType = InferType<typeof schema>;

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isValid
        },
        reset
    } = useForm<schemaType>({
        mode: "onSubmit",
        resolver: yupResolver(schema)
    })

    const onSubmit = (data: { [key: string]: any; }) => {
        const formData = new FormData();
        console.log(data)
        Object.keys(data).forEach((key) => {
            const value = data[key];
            if (value[0] && typeof value !== "string" && typeof value[0] !== "string") {
                Array.from(value as File[]).forEach((val) => {
                    formData.append(key, val);
                });
            } else {
                formData.append(key, value);
            }
        });
        // addPhotos(formData)
    }


    return (
        <div className={classes.container}>
            <AdminMenu/>
            <div className={classes.right}>
                <div className={classes.right_content}>
                    {routes.map((item, index) => (
                        <Link to={item.route} key={index}
                              className={location.pathname === item.route ? classes.activeLink : ""}>
                            {item.name}
                        </Link>
                    ))}
                    <div className={classes.right_bottom}>
                        <div className={classes.right_add}>
                            <div className={classes.addPhoto}>
                                <img src={AddPhoto} alt="addPhoto"/>
                                <Button className={classes.button} variant="contained" component="label">
                                    Upload
                                    <input {...register("photos")} hidden accept="image/*" multiple type="file"/>
                                    {/*<p>{errors?.photos?.message}</p>*/}
                                </Button>
                            </div>
                            <h2>Вставить ссылку <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.266 4.55492L11.3491 2.47183C11.805 2.01591 12.3473 1.65523 12.9449 1.41039C13.5425 1.16556 14.1837 1.04135 14.832 1.04488C15.4803 1.04841 16.123 1.17959 16.7233 1.43094C17.3236 1.68229 17.8698 2.04889 18.3307 2.5098C18.7916 2.97071 19.1582 3.51691 19.4095 4.11721C19.6609 4.71751 19.7921 5.36016 19.7956 6.00846C19.7991 6.65676 19.6749 7.29802 19.4301 7.89562C19.1853 8.49323 18.8246 9.03547 18.3687 9.4914L16.2856 11.5745M12.1194 15.7407L10.0363 17.8238C9.58038 18.2797 9.03813 18.6404 8.44053 18.8852C7.84293 19.13 7.20167 19.2542 6.55337 19.2507C5.24406 19.2436 3.98556 18.7166 3.0547 17.7858C2.12385 16.8549 1.5969 15.5964 1.58978 14.2871C1.58266 12.9778 2.09595 11.725 3.01674 10.8042L5.09982 8.7211M7.91631 12.9244L13.4712 7.36951"
                                    stroke="#FFB03B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            </h2>
                            <div className={classes.right_info_block}>
                                <input/>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className={classes.right_info}>
                            <div className={classes.right_info_block}>
                                <h3>Заглавный текст</h3>
                                <input type="text" {...register("title")}/>
                                <p>{errors?.title?.message}</p>
                            </div>
                            <div>
                                <h3>Описание</h3>
                                <textarea className={classes.input_area} {...register("subtitle")}> </textarea>
                                <p>{errors?.subtitle?.message}</p>
                            </div>
                            <AdminButton type={"submit"}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminEditor;
