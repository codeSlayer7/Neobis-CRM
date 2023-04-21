import * as yup from 'yup'


export const schema = yup.object().shape({
    email: yup.string().required('Укажите логин !').email('Неверный email!'),
    password: yup
      .string()
      .required('Укажите пароль !')
      .min(6, 'Пароль должен быть не меньше 6 символов')
      .max(40, 'Пароль должен быть не больше 40 символов'),

  });


  export const schemaCreate = yup.object().shape({
    email: yup.string().required('Укажите логин !').email('Неверный email!'),
      phoneNumber: yup.number().required(),
      firstName: yup.string().required(),
      lastName: yup.string().required(),
  });


  export const schemaUpdate = yup.object().shape({
    email: yup.string().required('Укажите логин !').email('Неверный email!'),
    phoneNumber: yup.number().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
  });