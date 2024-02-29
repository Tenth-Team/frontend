import type { FC, ReactNode } from "react"
import s from "./styles.module.scss"

type CommonButtonProps = {
  children: string
  type: "button" | "submit" | "reset" | undefined
  disabled?: boolean
  icon?: ReactNode
  style?: object
  onClick?: () => void
}

type PrimaryButtonProps = CommonButtonProps & {
  primary: boolean
  secondary?: never
}
type SecondaryButtonProps = CommonButtonProps & {
  secondary: boolean
  primary?: never
}

type TypeButtonProps = PrimaryButtonProps | SecondaryButtonProps

export const Button: FC<TypeButtonProps> = ({
  disabled = false,
  type = "button",
  children,
  icon,
  primary = false,
  secondary = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${s.button} ${(primary && s.primary) || (secondary && s.secondary)}`}
      type={type}
      disabled={disabled}
    >
      {icon}
      {children}
    </button>
  )
}
