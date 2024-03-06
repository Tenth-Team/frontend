import type { FC } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import s from "../../ModalAddUser/FormAddUser/styles.module.scss"
import style from "./FormAddPromo.module.scss"
import { Input, Button } from "../../../components/formElements"

type TypeFormProps = {
  onClick: () => void
}

export const FormAddPromo: FC<TypeFormProps> = ({ onClick }) => {
  const formInputsData: Record<
    string,
    {
      label: string
      name: string
      type: string
      schema: yup.StringSchema | yup.MixedSchema
    }
  > = {
    promo: {
      label: "Название промо-кода",
      name: "promo",
      type: "text",
      schema: yup.string().min(1).required(),
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
                type: "promo",
                defaultValue: "",
              }}
            />
          )
        })}
      </div>

      <div className={`${s.form__footer} ${style.form__footer}`}>
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
