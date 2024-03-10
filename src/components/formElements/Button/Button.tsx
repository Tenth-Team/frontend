import type { FC, ReactNode, MouseEvent } from "react"
import s from "./styles.module.scss"

type CommonButtonProps = {
  children: string | ReactNode
  type: "button" | "submit" | "reset" | undefined
  disabled?: boolean
  icon?: ReactNode
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  style?: object
  parentClass?: string | CSSModuleClasses
  form?: string
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
  form,
}) => {
  console.log(disabled)
  return (
    <button
      form={form}
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
