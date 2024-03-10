import { useMemo, type FC } from "react"
import s from "./styles.module.scss"

type TypeInputProps = {
  label?: string
  name?: string
  register?: any
  error?: string
  style?: object
  parentClass?: string
}

type RowInput = {
  row: boolean
  column?: never
}

type ColumnInput = {
  row?: never
  column: boolean
}

type DirectionInput = RowInput | ColumnInput

export const InputRow: FC<TypeInputProps & DirectionInput> = ({
  label,
  name,
  register,
  error,
  style,
  parentClass = "",
  column = false,
  row = false,
}) => {
  const inputDefaulValue = useMemo(() => {
    if (typeof register.defaultValue === "object") {
      return register.defaultValue
        .map((item: { name: string }) => item.name)
        .join("; ")
    }
    return register.defaultValue
  }, [register.defaultValue])

  return (
    <div
      className={`${s.input} ${(row && s.row) || (column && s.column)} ${parentClass}`}
      style={style}
    >
      <label className={s.input__label}>{label}</label>
      <div className={s.input__wrapper}>
        <input
          className={s.input__inner}
          {...register}
          defaultValue={inputDefaulValue}
        />
        {error ? <span className={s.input__error}>{error}</span> : null}
      </div>
    </div>
  )
}
