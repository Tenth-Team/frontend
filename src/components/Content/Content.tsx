import type { FC, ReactNode } from "react"
import style from "./Content.module.scss"

type ContentProps = {
  children: ReactNode
  className?: string | CSSModuleClasses
}

export const Content: FC<ContentProps> = ({ children, className }) => {
  return (
    <>
      <section className={`${style.content} ${className ? className : ""}`}>
        {children}
      </section>
    </>
  )
}
