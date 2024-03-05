import type { FC } from "react"
import style from "./HeaderContent.module.scss"

type HeaderContentProps = {
  children: string
}

export const HeaderContent: FC<HeaderContentProps> = ({ children }) => {
  return (
    <>
      <h2 className={style.title}>{children}</h2>
    </>
  )
}
