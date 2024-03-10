import type { FC } from "react"
import s from "./styles.module.scss"

type TypeInputProps = {
  label: string
  name: string
  register: any
  error?: string
  style?: object
}

export const Input: FC<TypeInputProps> = props => {
  return (
    <div className={s.input} style={props.style}>
      <label className={s.input__label}>{props.label}</label>
      <input className={s.input__inner} {...props.register} />
      {props.error ? (
        <span className={s.input__error}>{props.error}</span>
      ) : null}
    </div>
  )
}
