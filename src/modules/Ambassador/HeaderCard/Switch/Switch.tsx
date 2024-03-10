import type { FC } from "react"
import s from "./Switch.module.scss"

type TypeSwitch = {
  parrentClass?: string | CSSModuleClasses
  checked: boolean
  onCheck: () => void
}

export const Switch: FC<TypeSwitch> = ({
  parrentClass,
  checked = false,
  onCheck,
}) => {
  return (
    <label className={`${s.switch} ${parrentClass}`}>
      <input
        type="checkbox"
        className={s.switch__input}
        checked={checked}
        onChange={onCheck}
      />
      Режим редактирования
    </label>
  )
}
