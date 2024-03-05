import type { FC, ReactNode } from "react"
import s from "./styles.module.scss"

type CommonButtonProps = {
  children: string
  type: "button" | "submit" | "reset" | undefined
  disabled?: boolean
  icon?: ReactNode
  onClick?: () => void
  style?: object
  parentClass?: string | CSSModuleClasses
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
  style,
  parentClass,
}) => {
  return (
    <button
      style={style}
      onClick={onClick}
      className={`${s.button} ${(primary && s.primary) || (secondary && s.secondary)} ${parentClass ? parentClass : ""} `}
      type={type}
      disabled={disabled}
    >
      {icon}
      {children}
    </button>
  )
}
