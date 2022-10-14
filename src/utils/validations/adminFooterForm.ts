import * as yup from "yup";

export const schema = yup.object(({
    desc: yup.string().required('Заполните поле!'),
    linkGeo: yup.string().required('Заполните поле!'),
    link: yup.string().required('Заполните поле!'),
    instagram: yup.string().required('Заполните поле!'),
    facebook: yup.string().required('Заполните поле!'),
    twitter: yup.string().required('Заполните поле!'),
    phone: yup.string().required('Введите номер!'),
    email: yup.string().required('Введите почту!'),
    workTime: yup.string().required('Выберите время!'),
}))