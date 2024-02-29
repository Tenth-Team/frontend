import { useState, type FC } from "react"
import { Input } from "../../../modules/ModalAddUser/FormAddUser/components/Input"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import style from "./LoginForm.module.scss"
import { InputPassword } from "./InputPassword/InputPassword"
import { Box, Button, Popover } from "@mui/material"
import { AlertTtriangleIconSVG } from "../../../ui-kit"
import React from "react"
//import { Button } from "../../../modules/ModalAddUser/FormAddUser/components/button"

/* type TypeFormProps = {
  onClick: () => void
} */

export const LoginForm: FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [isValid, setIsValid] = useState<boolean>(true)
  React.useEffect(() => {
    console.log(isValid)
  })

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
    login: {
      label: "Логин",
      name: "login",
      type: "text",
      placeholder: "Введите логин",
      schema: yup.string().min(3).max(15).required(),
    },
    password: {
      label: "Пароль",
      name: "password",
      type: "password",
      placeholder: "Введите пароль",
      schema: yup.string().min(4).required(),
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
    formState: {
      errors,
      //    isValid
    },
    reset,
  } = useForm<typeof formInputsData>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  })

  //  поменять на !isValid
  const handleClickOpen = () => {
    if (isValid) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onSubmit = (data: any) => {
    console.log(data)
    handleClickOpen()
    reset()
  }

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.form__inputs}>
          <div className={style.form__input}>
            <Input
              label="Логин"
              name="login"
              error={errors.login?.message}
              register={{
                ...register("login"),
                type: "text",
                placeholder: "Введите логин",
                defaultValue: "",
              }}
            />

            {!isValid ? (
              <AlertTtriangleIconSVG className={style.form__errorIcon} />
            ) : null}
            {!isValid ? (
              <p className={style.form__errorText}>Неправильный логин</p>
            ) : null}
          </div>

          <div className={style.form__input}>
            {isValid ? (
              <InputPassword
                label="Пароль"
                name="password"
                error={errors.password?.message}
                register={{
                  ...register("password"),
                  defaultValue: "",
                }}
              />
            ) : (
              <Input
                label="Пароль"
                name="password"
                error={errors.password?.message}
                register={{
                  ...register("password"),
                  defaultValue: "",
                  placeholder: "Введите пароль",
                }}
              />
            )}
            {!isValid ? (
              <AlertTtriangleIconSVG className={style.form__errorIcon} />
            ) : null}
            {!isValid ? (
              <p className={style.form__errorText}>Неправильный пароль</p>
            ) : null}
          </div>
        </div>

        <Button
          variant="outlined"
          type="submit"
          disabled={!isValid}
          onClick={handleClickOpen}
        >
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
