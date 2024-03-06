import type { FC, ReactNode } from "react"
import s from "./styles.module.scss"

type IconButtonProps = {
  type?: "button" | "submit" | "reset" | undefined
  disabled?: boolean
  icon?: ReactNode
  onClick?: () => void
  style?: object
  parentClass?: string | CSSModuleClasses
}

type BidButtonProps = IconButtonProps & {
  big: boolean
  small?: never
}
type SmallButtonProps = IconButtonProps & {
  big?: never
  small: boolean
}
type TypeIconButtonProps = BidButtonProps | SmallButtonProps

export const IconButton: FC<TypeIconButtonProps> = ({
  disabled = false,
  type = "button",
  icon,
  big = false,
  small = false,
  onClick,
  style,
  parentClass,
}) => {
  const classes = `${(big && s.big) || (small && s.small)} ${parentClass ? parentClass : ""}`

  return (
    <button
      onClick={onClick}
      style={style}
      type={type}
      disabled={disabled}
      className={`${s.IconButton} ${classes}`}
    >
      {icon}
    </button>
  )
}
