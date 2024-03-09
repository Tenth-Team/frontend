import { useState, type FC } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import style from "./LoginForm.module.scss"
import { Box, Popover } from "@mui/material"
import { AlertTtriangleIconSVG } from "../../ui-kit"
import { Button } from "../../components/formElements"
import { useAppDispatch } from "../../store/hooks"
import { login } from "../../store/api"
import { InputLogin } from "./InputLogin"
import { LOGIN_FORM } from "../../utils/formInputsData"
import { unwrapResult } from "@reduxjs/toolkit"
import { useNavigate } from "react-router-dom"
import type { LoginData } from "../../@types/api"

export const LoginForm: FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const formInputsData = LOGIN_FORM

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
  } = useForm<typeof formInputsData, any, LoginData>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  })

  const handleClose = () => {
    setOpen(false)
  }

  const onSubmit = async (data: LoginData) => {
    try {
      const res = await dispatch(login(data))
      const originalPromiseResult = unwrapResult(res)
      if (originalPromiseResult) {
        navigate("/")
        reset()
      }
    } catch (err) {
      setOpen(true)
      console.log(err)
    }
  }

  const styleButton = {
    width: "100%",
    justifyContent: "center",
  }

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.form__inputs}>
          {Object.keys(formInputsData).map((item, idx, arr) => {
            const { label, type, placeholder } = formInputsData[item]

            return (
              <div key={item} className={style.form__input}>
                <InputLogin
                  label={label}
                  name={item}
                  error={errors[item]?.message}
                  type={type}
                  placeholder={placeholder}
                  register={{
                    ...register(item),
                    isValid,
                  }}
                />
              </div>
            )
          })}
        </div>

        <Button primary type="submit" style={styleButton} disabled={!isValid}>
          Войти
        </Button>
      </form>

      <Popover
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClose={handleClose}
        open={open}
      >
        <Box className={style.modal__contaner}>
          <div className={style.modal__titleArea}>
            <AlertTtriangleIconSVG />
            <h2 id="customized-dialog-title" className={style.modal__title}>
              Ошибка входа в систему
            </h2>
          </div>
          <div className={style.modal__textArea}>
            <p className={style.modal__text}>
              Попробуйте еще раз ввести личные данные для входа в систему,
              убедившись в их корректности. Посмотрите, может вы случайно
              сменили язык клавиатуры или нажали caps lock. Если вы забыли
              пароль или вышеперечисленные советы не помогли - обращайтесь в
              техническую поддержку CRM-системы.
            </p>
            <p className={style.modal__text}>
              С любовью, <br />
              разработчики MVP CRM-системы{" "}
              <span className={style.modal__text_colored}>❤</span>
            </p>
          </div>
        </Box>
      </Popover>
    </>
  )
}
