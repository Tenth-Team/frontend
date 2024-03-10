import type { FC } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import s from "../../ModalAddUser/FormAddUser/styles.module.scss"
import style from "./FormAddPromo.module.scss"
import { Input, Button } from "../../../components/formElements"
import type { AmbassadorRoot } from "../../../store/ambassador/types"

type TypeFormProps = {
  onClick: () => void
  //onUpdate:({promo}) => void,
  row: AmbassadorRoot
}

export const FormAddPromo: FC<TypeFormProps> = ({
  onClick,
  //onUpdate,
  row,
}) => {
  const formInputsData: Record<
    string,
    {
      label: string
      name: string
      type: string
      schema: yup.StringSchema | yup.MixedSchema
    }
  > = {
    name: {
      label: "ФИО",
      name: "full_name",
      type: "text",
      schema: yup.string(),
    },
    promo: {
      label: "Название промо-кода",
      name: "promo_code",
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
    onClick()
    reset()
    return data
  }

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.form__inputs}>
        <div className={style.form__userName}>
          <h3>ФИО</h3>
          <p>{row.full_name}</p>
        </div>

        <Input
          label={"Название промо-кода"}
          name={"promo"}
          error={errors["promo"]?.message}
          style={style}
          register={{
            ...register("promo"),
            type: "promo",
            defaultValue: "",
          }}
        />
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
