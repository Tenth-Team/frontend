import { useState, type FC } from "react"
import s from "./styles.module.scss"
import { AlertTtriangleIconSVG, EyeIconSVG } from "../../../ui-kit"

type TypeInputProps = {
  label: string
  name: string
  register: any
  error?: string
  style?: object
  type?: string
  placeholder?: string
}

export const InputLogin: FC<TypeInputProps> = ({
  label,
  name,
  register,
  error,
  style,
  type = "text",
  placeholder = "",
}) => {
  const isPassowrd = type === "password"

  const [typeInput, setInput] = useState(type)
  const handleMouseDown = () => {
    setInput("text")
  }

  const handleMouseUp = () => {
    setInput(type)
  }

  return (
    <fieldset
      className={s.input}
      style={style}
      aria-invalid={error ? true : false}
    >
      <label className={s.input__label}>{label}</label>
      <div className={s.input__wrapper}>
        <input
          className={s.input__inner}
          {...register}
          placeholder={placeholder}
          type={isPassowrd ? typeInput : type}
        />
        {error || isPassowrd ? (
          <div className={s.input__icons}>
            {isPassowrd ? (
              <button
                className={s.input__eye}
                type="button"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
              >
                <EyeIconSVG />
              </button>
            ) : null}
            {error && <AlertTtriangleIconSVG className={s.input__alert} />}
          </div>
        ) : null}
      </div>
      {error && <span className={s.input__error}>{error}</span>}
    </fieldset>
  )
}
