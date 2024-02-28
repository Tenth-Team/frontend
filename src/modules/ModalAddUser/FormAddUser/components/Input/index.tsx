import type { FC } from "react"
import s from "./styles.module.scss"

type TypeInputProps = {
  label: string
  name: string
  register: any
  error?: string
}

export const Input: FC<TypeInputProps> = props => {
  return (
    <fieldset className={s.input}>
      <label className={s.input__label}>{props.label}</label>
      <input className={s.input__inner} {...props.register} />
      {props.error ? (
        <span className={s.input__error}>{props.error}</span>
      ) : null}
    </fieldset>
  )
}
