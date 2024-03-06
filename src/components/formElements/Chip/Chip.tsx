import type { FC } from "react"
import { XIconSVG } from "../../../ui-kit"
import s from "./styles.module.scss"

type TypeChipProps = {
  label: string
  onClick?: () => never
  onDelete?: () => never
}
export const Chip: FC<TypeChipProps> = props => {
  return (
    <div className={s.chip} onClick={props.onClick}>
      <span className={s.chip__label}>{props.label}</span>
      <button onClick={props.onDelete} className={s.chip__button}>
        <XIconSVG />
      </button>
    </div>
  )
}
