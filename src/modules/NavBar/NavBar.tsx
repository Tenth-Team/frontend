import { NavLink, useNavigate } from "react-router-dom"
import s from "./styles.module.scss"
import {
  UsersIconSVG,
  BarcodeIconSVG,
  ChatIconSVG,
  ClipboardTextIconSVG,
  CommandIconSVG,
  CubeIconSVG,
  ChartPieIconSVG,
  GearSixIconSVG,
  ArrowRightIconSVG,
} from "../../ui-kit"
import { removeToken } from "../../utils/tokenStorage"

export const NavBar = () => {
  const navigate = useNavigate()

  return (
    <div className={s.side}>
      <nav className={s.nav}>
        <ul className={s.nav__list}>
          <li>
            <NavLink to="/ambassadors" className={s.nav__item}>
              <UsersIconSVG />
              Амбассадоры
            </NavLink>
          </li>
          <li>
            <NavLink to="/promo-codes" className={s.nav__item}>
              <BarcodeIconSVG /> Промо-коды
            </NavLink>
          </li>

          <li>
            <NavLink to="/mailing-management" className={s.nav__item}>
              <ChatIconSVG />
              Управление рассылками
            </NavLink>
          </li>

          <li>
            <NavLink to="/ambassadors-content" className={s.nav__item}>
              <ClipboardTextIconSVG />
              Контент амбассадоров
            </NavLink>
          </li>

          <li>
            <NavLink to="/loyalty-program" className={s.nav__item}>
              <CommandIconSVG />
              Программа лояльности
            </NavLink>
          </li>

          <li>
            <NavLink to="/sending-merch" className={s.nav__item}>
              <CubeIconSVG />
              Отправка мерча
            </NavLink>
          </li>

          <li>
            <NavLink to="/analytics" className={s.nav__item}>
              <ChartPieIconSVG />
              Аналитика
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={s.nav}>
        <ul className={s.nav__list}>
          <li>
            <NavLink to="/setting" className={s.nav__item}>
              <GearSixIconSVG />
              Настройки
            </NavLink>
          </li>

          <li>
            <button
              type="button"
              onClick={() => {
                removeToken()
                navigate("/signin")
              }}
              className={s.nav__item}
            >
              <ArrowRightIconSVG />
              Выход
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
