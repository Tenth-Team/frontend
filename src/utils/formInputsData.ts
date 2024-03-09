import * as yup from "yup"

export type TypeInputsForm = Record<
  string,
  {
    label: string
    name: string
    type: string
    placeholder: string
    schema: yup.StringSchema | yup.MixedSchema
  }
>

export const LOGIN_FORM: TypeInputsForm = {
  username: {
    label: "Логин",
    name: "username",
    type: "text",
    placeholder: "Введите логин",
    schema: yup.string().min(3).max(100).required(),
  },
  password: {
    label: "Пароль",
    name: "password",
    type: "password",
    placeholder: "Введите пароль",
    schema: yup.string().min(4).required(),
  },
}

export const ADD_USER_FORM: TypeInputsForm = {
  fullName: {
    label: "ФИО",
    name: "fullName",
    type: "text",
    placeholder: "",
    schema: yup.string().min(3).max(100).required(),
  },
  phone: {
    label: "Телефон",
    name: "phone",
    type: "tel",
    placeholder: "",
    schema: yup
      .string()
      .matches(
        /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
        "Phone number is not valid",
      ),
  },
  telegram: {
    label: "Телеграмм",
    name: "telegram",
    type: "text",
    placeholder: "",
    schema: yup.string().min(2).max(100).required(),
  },
  email: {
    label: "Email",
    name: "email",
    type: "text",
    placeholder: "",
    schema: yup.string().min(2).max(100).required(),
  },
  program: {
    label: "Программа обучения",
    name: "program",
    type: "text",
    placeholder: "",
    schema: yup.string().required(),
  },
  education: {
    label: "Образование",
    name: "education",
    type: "text",
    placeholder: "",
    schema: yup.string().required(),
  },
  objective: {
    label: "Цель обучения",
    name: "objective",
    type: "text",
    placeholder: "",
    schema: yup.string().required(),
  },
  sex: {
    label: "Пол",
    name: "sex",
    type: "text",
    placeholder: "",
    schema: yup
      .mixed()
      .oneOf(["male", "female", "other"] as const)
      .defined(),
  },
  city: {
    label: "Город",
    name: "city",
    type: "text",
    placeholder: "",
    schema: yup.string().required(),
  },
  country: {
    label: "Страна",
    name: "country",
    type: "text",
    placeholder: "",
    schema: yup.string().required(),
  },
  address: {
    label: "Адрес",
    name: "address",
    type: "text",
    placeholder: "",
    schema: yup.string().required(),
  },
  index: {
    label: "Индекс",
    name: "index",
    type: "text",
    placeholder: "",
    schema: yup.string().required(),
  },
  blog: {
    label: "Блог",
    name: "blog",
    type: "text",
    placeholder: "",
    schema: yup.string(),
  },
  clothing: {
    label: "Размер одежды",
    name: "clothing",
    type: "text",
    placeholder: "",
    schema: yup.string(),
  },
  shoes: {
    label: "Размер обуви",
    name: "shoes",
    type: "text",
    placeholder: "",
    schema: yup.string(),
  },
}
