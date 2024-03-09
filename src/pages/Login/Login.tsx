import style from "./Login.module.scss"
import { LoginForm } from "../../modules/LoginForm/LoginForm"
import { Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { checkToken } from "../../utils/tokenStorage"

export const Login = () => {
  const [isAuthenticated, setAuthenticated] = useState(() => checkToken())

  useEffect(() => {
    const token = checkToken()
    setAuthenticated(token)
  }, [])

  return isAuthenticated ? (
    <Navigate to="/ambassadors" replace />
  ) : (
    <section className={style.container}>
      <h2 className={style.container__title}>
        CRM-система комьюнити-менеджера
        <span className={style.container__title_colored}>
          амбассадоров Яндекс Практикума
        </span>
      </h2>
      <LoginForm />
    </section>
  )
}
