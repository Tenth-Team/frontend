import type { Dispatch, FC, SetStateAction } from "react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { getAmbassadorData } from "../../../store/selectors"
import { InputRow } from "../../../components/formElements/InputRow"
import type { TypeInputsForm } from "../data"
import { FORM_DATA } from "../data"

import s from "./AmbassadorForm.module.scss"
import { patchAmbassador } from "../../../store/api"

export const AmbassadorForm: FC<{
  setDisabledSubmit: Dispatch<SetStateAction<boolean>>
  isEditMode: boolean
}> = ({ setDisabledSubmit, isEditMode }) => {
  const formFieldsData = FORM_DATA
  const { ambassadorCard, loading } = useAppSelector(getAmbassadorData)

  const dispatch = useAppDispatch()

  const formInputs: TypeInputsForm = Object.keys(formFieldsData).reduce(
    (preview, current) => {
      const { inputs } = formFieldsData[current]
      const schemaObj = Object.keys(inputs).reduce(
        (prev, cur) => ({
          ...prev,
          [cur]: inputs[cur],
        }),
        {},
      )
      return { ...preview, ...schemaObj }
    },
    {},
  )

  const formSchemas = Object.keys(formInputs).reduce(
    (prev, cur) => ({
      ...prev,
      [cur]: formInputs[cur].schema,
    }),
    {},
  )

  const schema = yup.object(formSchemas)
  const {
    register,
    formState: { errors, isDirty, dirtyFields },
    getValues,
    handleSubmit,
    reset,
  } = useForm<typeof formInputs>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  })

  useEffect(() => {
    if (!loading) {
      reset(ambassadorCard)
    }
  }, [ambassadorCard, loading, reset])

  useEffect(() => {
    setDisabledSubmit(() => !isDirty)
  }, [isDirty, setDisabledSubmit])

  const onSubmit = () => {
    const updatesValue = Object.keys(dirtyFields).reduce(
      (prev, cur) => ({
        ...prev,
        [cur]: getValues()[cur],
      }),
      {},
    )
    dispatch(patchAmbassador({ id: ambassadorCard.id, data: updatesValue }))
  }

  const renderInputs = (section: string) => {
    return Object.keys(formFieldsData[section].inputs).map(item => (
      <InputRow
        key={item}
        row
        label={formFieldsData[section].inputs[item].label}
        name={item}
        error={errors[item]?.message}
        register={{
          ...register(item),
          type: formFieldsData[section].inputs[item].type,
          placeholder: formFieldsData[section].inputs[item].placeholder,
        }}
      />
    ))
  }

  return (
    <form className={s.form} id="ambassador" onSubmit={handleSubmit(onSubmit)}>
      <div className={s.form__column}>
        <fieldset className={s.fieldset} disabled={isEditMode}>
          <legend className={s.legend}>{formFieldsData.contacts.legend}</legend>
          {renderInputs("contacts")}
        </fieldset>

        <fieldset className={s.fieldset} disabled={isEditMode}>
          <legend className={s.legend}>
            {formFieldsData.profession.legend}
          </legend>
          {renderInputs("profession")}
        </fieldset>
      </div>

      <div className={s.form__column}>
        <fieldset className={s.fieldset} disabled={isEditMode}>
          <legend className={s.legend}>{formFieldsData.personal.legend}</legend>
          {renderInputs("personal")}
        </fieldset>

        <fieldset className={s.fieldset} disabled={isEditMode}>
          <legend className={s.legend}>{formFieldsData.activity.legend}</legend>
          {renderInputs("activity")}
        </fieldset>
      </div>
    </form>
  )
}
