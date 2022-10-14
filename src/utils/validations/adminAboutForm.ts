import * as yup from "yup";

export const schema = yup.object(({
    title: yup.string().required('Заполните поле!'),
    subtitle: yup.string().required('Заполните поле!').max(40).required('Максимум 40 символов'),
    short: yup.string().required('Заполните поле!').max(30).required('Максимум 30 символов'),
    photos: yup.mixed().test("required", "please add photo", value => {
        return value && value.length;
    }),
}))
