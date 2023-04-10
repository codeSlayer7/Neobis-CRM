import * as yup from 'yup'


export const schema = yup.object().shape({
    email: yup.string().required('Укажите логин !').email('Неверный email!'),
    password: yup
      .string()
      .required('Укажите пароль !')
      .min(6, 'Пароль должен быть не меньше 6 символов')
      .max(40, 'Пароль должен быть не больше 40 символов'),
    phoneNumber: yup.number(),
    firstName: yup.string(),
    lastName: yup.string(),
  });