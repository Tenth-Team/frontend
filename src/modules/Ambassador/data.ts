import * as yup from "yup"

export type TypeInputsForm = Record<
  string,
  {
    label: string
    name: string
    type: string
    placeholder?: string
    options?: string[]
    checked?: boolean
    schema:
      | yup.StringSchema
      | yup.MixedSchema
      | yup.DateSchema
      | yup.NumberSchema
      | yup.BooleanSchema
    defaultValue?: unknown
  }
>
export type TypeFieldsForm = Record<
  string,
  { legend: string; inputs: TypeInputsForm }
>

export const FORM_DATA: TypeFieldsForm = {
  contacts: {
    legend: "Контактная информация",
    inputs: {
      phone_number: {
        label: "Номер телефона",
        name: "phone_number",
        type: "text",
        placeholder: "Введите номер телефона",
        schema: yup
          .string()
          .matches(
            /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/,
            "Phone number is not valid",
          ),
      },
      telegram: {
        label: "Личный телеграмм",
        name: "telegram",
        type: "text",
        placeholder: "Введите личный телеграмм",
        schema: yup.string(),
      },
      email: {
        label: "E-mail",
        name: "email",
        type: "email",
        placeholder: "Введите E-mail",
        schema: yup.string().email("Invalid email format"),
      },
      country: {
        label: "Страна",
        name: "country",
        type: "text",
        placeholder: "Введите страну",
        schema: yup.string(),
      },
      city: {
        label: "Город",
        name: "city",
        type: "text",
        placeholder: "Введите город",
        schema: yup.string(),
      },
      postal_code: {
        label: "Индекс",
        name: "postal_code",
        type: "text",
        placeholder: "Введите индекс",
        schema: yup.string(),
      },
      address: {
        label: "Адрес",
        name: "address",
        type: "text",
        placeholder: "Введите адрес",
        schema: yup.string(),
      },
    },
  },
  profession: {
    legend: "Образование и карьера",
    inputs: {
      ya_edu: {
        label: "Программа обучения",
        name: "ya_edu",
        type: "text",
        placeholder: "Введите программу обучения",
        schema: yup.string(),
      },
      edu: {
        label: "Образование до обучения в Яндекс Практикуме",
        name: "edu",
        type: "text",
        placeholder: "Введите образование до обучения в Яндекс Практикуме",
        schema: yup.string(),
      },
      study_goal: {
        label: "Цель обучения в Яндекс Практикуме",
        name: "study_goal",
        type: "text",
        placeholder: "Введите цель обучения в Яндекс Практикуме",
        schema: yup.string(),
      },
      work: {
        label: "Где и кем работает",
        name: "work",
        type: "text",
        placeholder: "Введите место работы и должность",
        schema: yup.string(),
      },
    },
  },
  personal: {
    legend: "Личная информация",
    inputs: {
      gender: {
        label: "Пол",
        name: "gender",
        type: "text",
        placeholder: "Введите пол",
        schema: yup.string(),
      },
      clothing_size: {
        label: "Размер одежды",
        name: "clothing_size",
        type: "text",
        placeholder: "Введите размер одежды",
        schema: yup.string(),
      },
      shoe_size: {
        label: "Размер обуви",
        name: "shoe_size",
        type: "text",
        placeholder: "Введите размер обуви",
        schema: yup.string(),
      },
      additional_comments: {
        label: "О себе",
        name: "additional_comments",
        type: "textarea",
        placeholder: "Расскажите о себе",
        schema: yup.string(),
      },
    },
  },
  activity: {
    legend: "Амбассадорская деятельность",
    inputs: {
      reg_date: {
        label: "Дата регистрации амбассадора",
        name: "reg_date",
        type: "datetime-local",
        placeholder: "Выберите дату регистрации",
        schema: yup.date().required("Дата регистрации обязательна"),
      },
      status: {
        label: "Статус амбассадора",
        name: "status",
        type: "select",
        options: ["active", "inactive"],
        schema: yup.string().oneOf(["active", "inactive"], "Выберите статус"),
      },
      amb_goals: {
        label: "Деятельность в рамках амбассадорства",
        name: "amb_goals",
        type: "textarea",
        placeholder: "Опишите деятельность",
        schema: yup.string(),
      },
      blog_url: {
        label: "Ссылка на блог(и)",
        name: "blog_url",
        type: "text",
        placeholder: "Укажите ссылку на блог(и)",
        schema: yup.string().url("Неверный формат URL"),
      },
      content_count: {
        label: "Количество публикаций",
        name: "content_count",
        type: "number",
        placeholder: "Укажите количество публикаций",
        schema: yup
          .number()
          .positive("Количество должно быть положительным")
          .integer("Количество должно быть целым числом"),
      },
      promo_code: {
        label: "Активный промокод",
        name: "promo_code",
        type: "text",
        placeholder: "Укажите промокод (если есть)",
        schema: yup.string(),
      },
      chatbot_registration: {
        label: "Регистрация в чат-боте",
        name: "chatbot_registration",
        type: "checkbox",
        checked: false,
        schema: yup
          .boolean()
          .oneOf([true], "Необходимо подтверждение регистрации в чат-боте"),
      },
    },
  },
}
