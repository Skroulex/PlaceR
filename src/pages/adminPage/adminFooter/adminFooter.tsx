import React, {useState} from 'react';

import classes from "./adminFooter.module.scss"
import {Button} from "@mui/material";
import AddPhoto from "../../../assets/admin/addPhoto.png"
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {schema} from "../../../utils/validations/adminFooterForm";
import {InferType} from "yup";
import AdminButton from "../UI/adminButton/adminButton";
import AdminMenu from "../UI/adminMenu/adminMenu";
import plus from "../../../assets/admin/plus.svg"
import instagram from "../../../assets/admin/instagram.svg"
import facebook from "../../../assets/admin/facebook.svg"
import twitter from "../../../assets/admin/twitter.svg"
import link from "../../../assets/admin/link.svg"
import {Link, useLocation} from "react-router-dom";



const AdminFooter = () => {
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
                    <h4>Подвал</h4>
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
                            <h3>Информация</h3>
                            <h2>О нас</h2>
                            <div className={classes.right_info_block}>
                                <input/>
                            </div>
                            <div className={classes.right_info_block}>
                                <h2>Часы работы</h2>
                                <input type="text" {...register("time")}/>
                                <p>{errors?.time?.message}</p>
                            </div>
                            <div className={classes.right_info_block}>
                                <div className={classes.right_svg}><h2>Дополнительные ссылки</h2>
                                    <img className={classes.right_svg_plus} src={plus} alt="plus"/></div>
                                <input type="text" {...register("link")}/>
                                <p>{errors?.link?.message}</p>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className={classes.right_info}>
                            <h2>Вставить ссылку геолокации <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M9.266 4.55492L11.3491 2.47183C11.805 2.01591 12.3473 1.65523 12.9449 1.41039C13.5425 1.16556 14.1837 1.04135 14.832 1.04488C15.4803 1.04841 16.123 1.17959 16.7233 1.43094C17.3236 1.68229 17.8698 2.04889 18.3307 2.5098C18.7916 2.97071 19.1582 3.51691 19.4095 4.11721C19.6609 4.71751 19.7921 5.36016 19.7956 6.00846C19.7991 6.65676 19.6749 7.29802 19.4301 7.89562C19.1853 8.49323 18.8246 9.03547 18.3687 9.4914L16.2856 11.5745M12.1194 15.7407L10.0363 17.8238C9.58038 18.2797 9.03813 18.6404 8.44053 18.8852C7.84293 19.13 7.20167 19.2542 6.55337 19.2507C5.24406 19.2436 3.98556 18.7166 3.0547 17.7858C2.12385 16.8549 1.5969 15.5964 1.58978 14.2871C1.58266 12.9778 2.09595 11.725 3.01674 10.8042L5.09982 8.7211M7.91631 12.9244L13.4712 7.36951"
                                    stroke="#FFB03B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            </h2>
                            <div className={classes.right_info_block}>
                                <input type="text" {...register("linkGeo")}/>
                                <p>{errors?.linkGeo?.message}</p>
                            </div>
                            <h3>Социальные сети</h3>
                            <div className={classes.right_info_block}>
                                <div className={classes.right_svg}>
                                    <h2>Instagram</h2>
                                    <img className={classes.right_svg_plus} src={instagram} alt="instagram"/>
                                </div>
                                <input type="text" {...register("instagram")}/>
                                <p>{errors?.instagram?.message}</p>
                            </div>
                            <div className={classes.right_info_block}>
                                <div className={classes.right_svg}>
                                    <h2>Facebook</h2>
                                    <img className={classes.right_svg_plus} src={facebook} alt="facebook"/>
                                </div>
                                <input type="text" {...register("facebook")}/>
                                <p>{errors?.facebook?.message}</p>
                            </div>
                            <div className={classes.right_info_block}>
                                <div className={classes.right_svg}>
                                    <h2>Twitter</h2>
                                    <img className={classes.right_svg_plus} src={twitter} alt="twitter"/>
                                </div>
                                <input type="text" {...register("twitter")}/>
                                <p>{errors?.twitter?.message}</p>
                            </div>
                            <h3>Контакты</h3>
                            <div className={classes.right_info_block}>
                                <div className={classes.right_svg}>
                                    <h2>Номер</h2>
                                    <img className={classes.right_svg_plus} src={plus} alt="plus"/>
                                </div>
                                <input type="text" {...register("phone")}/>
                                <p>{errors?.phone?.message}</p>
                            </div>
                            <div className={classes.right_info_block}>
                                <div className={classes.right_svg}>
                                    <h2>Почта</h2>
                                    <img className={classes.right_svg_plus} src={link} alt="link"/>
                                </div>
                                <input type="text" {...register("email")}/>
                                <p>{errors?.email?.message}</p>
                            </div>
                            <AdminButton type={"submit"}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminFooter;
