import { useState } from "react";
import { Navigate } from "react-router-dom";
import style from './Login.module.scss'

import { LoginForm } from "./LoginForm/LoginForm";


const Login = () => {
    const [loggedIn, setLogin] = useState(false);

    return (
            loggedIn ? <Navigate to="/" replace /> :
            <section className={style.container}>
                <h2 className={style.container__title}>CRM-система комьюнити-менеджера <span className={style.container__title_colored}>амбассадоров Яндекс Практикума </span></h2>
                <LoginForm />
            </section>
          );
    }

    export default Login