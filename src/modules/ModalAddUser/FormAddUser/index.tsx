import type { FC } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import s from "./styles.module.scss"
import { Input } from "./components/Input"

type TypeFormProps = {
  onClick: () => void
}

const phoneRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/

const schema = yup
  .object({
    phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
    telegram: yup.string().min(2).max(100).required(),
    email: yup.string().email().required(),
    program: yup.string().required(),
    education: yup.string().required(),
    objective: yup.string().required(),
    sex: yup
      .mixed()
      .oneOf(["male", "female", "other"] as const)
      .defined(),
    city: yup.string().required(),
    country: yup.string().required(),
    address: yup.string().required(),
    index: yup.string().required(),
    blog: yup.string(),
    clothing: yup.string(),
    shoes: yup.string(),
  })
  .required()

export const FormAddUser: FC<TypeFormProps> = ({ onClick }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) })

  const onSubmit = (data: any) => {
    console.log(data)
    onClick()
    reset()
  }

  return (
    <form className={`${s.form}`} onSubmit={handleSubmit(onSubmit)}>
      {/* Телефон */}
      <Input
        label="Телефон"
        name="phone"
        error={errors.phone?.message}
        register={{
          ...register("phone"),
          type: "tel",
          placeholder: "",
          defaultValue: "",
        }}
      />

      {/* Телеграмм */}
      <Input
        label="Телеграмм"
        name="telegram"
        error={errors.telegram?.message}
        register={{
          ...register("telegram"),
          type: "text",
          placeholder: "",
          defaultValue: "",
        }}
      />
      {/* Email */}
      <Input
        label="Email"
        name="email"
        error={errors.email?.message}
        register={{
          ...register("email"),
          type: "",
          placeholder: "",
          defaultValue: "",
        }}
      />
      {/* Программа обучения */}
      <Input
        label="Программа обучения"
        name="program"
        error={errors.program?.message}
        register={{
          ...register("program"),
          type: "text",
          placeholder: "",
          defaultValue: "",
        }}
      />
      {/* Образование */}
      <Input
        label="Образование"
        name="education"
        error={errors.education?.message}
        register={{
          ...register("education"),
          type: "text",
          placeholder: "",
          defaultValue: "",
        }}
      />
      {/* Цель обучения */}
      <Input
        label="Цель обучения"
        name="objective"
        error={errors.objective?.message}
        register={{
          ...register("objective"),
          type: "text",
          placeholder: "",
          defaultValue: "",
        }}
      />
      {/* Пол */}
      <Input
        label="Пол"
        name="sex"
        error={errors.sex?.message}
        register={{
          ...register("sex"),
          type: "text",
          placeholder: "",
          defaultValue: "",
        }}
      />

      {/* Город */}
      <Input
        label="Город"
        name="city"
        error={errors.city?.message}
        register={{
          ...register("city"),
          type: "text",
          placeholder: "",
          defaultValue: "",
        }}
      />

      {/* Страна */}
      <Input
        label="Страна"
        name="country"
        error={errors.country?.message}
        register={{
          ...register("country"),
          type: "text",
          placeholder: "",
          defaultValue: "",
        }}
      />

      {/* Адрес */}
      <Input
        label="Адрес"
        name="address"
        error={errors.address?.message}
        register={{
          ...register("address"),
          type: "text",
          placeholder: "",
          defaultValue: "",
        }}
      />

      {/* Индекс */}
      <Input
        label="Индекс"
        name="index"
        error={errors.index?.message}
        register={{
          ...register("index"),
          type: "text",
          placeholder: "",
          defaultValue: "",
        }}
      />
      {/* Блог */}
      <Input
        label="Блог"
        name="blog"
        error={errors.blog?.message}
        register={{
          ...register("blog"),
          type: "text",
          placeholder: "",
          defaultValue: "",
        }}
      />
      {/* Размер одежды */}
      <Input
        label="Размер одежды"
        name="clothing"
        error={errors.clothing?.message}
        register={{
          ...register("clothing"),
          type: "text",
          placeholder: "",
          defaultValue: "",
        }}
      />
      {/* Размер обуви */}
      <Input
        label="Размер обуви"
        name="shoes"
        error={errors.shoes?.message}
        register={{
          ...register("shoes"),
          type: "text",
          placeholder: "",
          defaultValue: "",
        }}
      />

      <button
        className={`${s.form__button} ${s.form__button_secondary}`}
        type="button"
      >
        Отменить
      </button>
      <button
        className={`${s.form__button} ${s.form__button_primary}`}
        type="submit"
        disabled={!isValid}
      >
        Добавить
      </button>
    </form>
  )
}
