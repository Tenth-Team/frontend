import type { FC } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import s from "./styles.module.scss"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { ADD_USER_FORM } from "../../../utils/formInputsData"

type TypeFormProps = {
  onClick: () => void
}

export const FormAddUser: FC<TypeFormProps> = ({ onClick }) => {
  const formInputsData = ADD_USER_FORM

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
