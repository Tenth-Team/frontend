import type { FC } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import s from "./styles.module.scss"
import { Input } from "./components/Input"
import { Button } from "./components/button"

type TypeFormProps = {
  onClick: () => void
}

export const FormAddUser: FC<TypeFormProps> = ({ onClick }) => {
  const formInputsData: Record<
    string,
    {
      label: string
      name: string
      type: string
      placeholder: string
      schema: yup.StringSchema | yup.MixedSchema
    }
  > = {
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

  const schema = yup
    .object(
      Object.keys(formInputsData).reduce(
        (prev, cur) => ({ ...prev, [cur]: formInputsData[cur].schema }),
        {},
      ),
    )
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<typeof formInputsData>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: any) => {
    console.log(data)
    onClick()
    reset()
  }

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.form__inputs}>
        {Object.keys(formInputsData).map((item, idx, arr) => {
          const firstColumn = Math.round(arr.length / 2) > idx
          const style = {
            gridColumnStart: firstColumn ? 1 : 2,
            gridRowStart:
              idx + 1 - (!firstColumn ? Math.round(arr.length / 2) : 0),
          }
          return (
            <Input
              key={item}
              label={formInputsData[item].label}
              name={item}
              error={errors[item]?.message}
              style={style}
              register={{
                ...register(item),
                type: "tel",
                placeholder: "",
                defaultValue: "",
              }}
            />
          )
        })}
      </div>

      <div className={s.form__footer}>
        <Button secondary type="button">
          Отменить
        </Button>

        <Button primary type="submit" disabled={!isValid}>
          Добавить
        </Button>
      </div>
    </form>
  )
}
