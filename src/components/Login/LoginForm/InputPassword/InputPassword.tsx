import { useState, type FC } from "react"
import s from "../../../../modules/ModalAddUser/FormAddUser/components/Input/styles.module.scss"
import style from "./InputPassword.module.scss"

type TypeInputProps = {
  label: string
  name: string
  register: any
  error?: string
}

export const InputPassword: FC<TypeInputProps> = props => {
  const [type, setType] = useState("password")

  console.log(type)
  const handleShowHidePassword = () => {
    if (type === "password") {
      setType("text")
    } else {
      setType("password")
    }
  }

  return (
    <fieldset className={s.input}>
      <label className={s.input__label}>{props.label}</label>
      <div className={`${s.input__area} ${style.input__password}`}>
        <input
          type={type}
          placeholder="Введите пароль"
          className={`${s.input__inner} ${style.input__password_area}
      `}
          {...props}
        />
        <a
          href="#"
          className={style.input__passwordControl}
          onClick={handleShowHidePassword}
        ></a>
      </div>
      {props.error ? (
        <span className={s.input__error}>{props.error}</span>
      ) : null}
    </fieldset>
  )
}
