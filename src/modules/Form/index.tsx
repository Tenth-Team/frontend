import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import s from "./styles.module.scss"

const phoneRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
    phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  })
  .required()

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = data => {
    console.log(data)
  }

  return (
    <form className={`${s.form} ${s.form__input}`} onSubmit={handleSubmit(onSubmit)}>
      <input className={s.form__input} {...register("firstName")} />
      <p className={s.form__error}>{errors.firstName?.message}</p>

      <input className={s.form__input} {...register("age")} />
      <p className={s.form__error}>{errors.age?.message}</p>

      <input className={s.form__input} {...register("phone")} />
      <p className={s.form__error}>{errors.phone?.message}</p>

      <input className={s.form__input} type="submit" />
    </form>
  )
}

export default Form
