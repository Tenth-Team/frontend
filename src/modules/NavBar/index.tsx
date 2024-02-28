import { NavLink } from "react-router-dom"
import s from "./styles.module.scss"
import {
  UsersIcon,
  ExitIcon,
  ChatIcon,
  AmbassadorContentIcon,
  ProgrammLoyalityIcon,
  SettingIcon,
  SendingMerchIcon,
  PromocodeIcon,
  StatisticsIcon,
} from "./../../ui-kit"

const NavBar = () => {
  return (
    <div className={s.side}>
      <nav className={s.nav}>
        <ul className={s.nav__list}>
          <li>
            <NavLink to="/" className={s.nav__item}>
              <UsersIcon /> Амбассадоры
            </NavLink>
          </li>
          <li>
            <NavLink to="/promo-codes" className={s.nav__item}>
              <PromocodeIcon /> Промо-коды
            </NavLink>
          </li>

          <li>
            <NavLink to="/mailing-management" className={s.nav__item}>
              <ChatIcon /> Управление рассылками
            </NavLink>
          </li>

          <li>
            <NavLink to="/ambassador-content" className={s.nav__item}>
              <AmbassadorContentIcon />
              Контент амбассадоров
            </NavLink>
          </li>

          <li>
            <NavLink to="/loyalty-program" className={s.nav__item}>
              <ProgrammLoyalityIcon />
              Программа лояльности
            </NavLink>
          </li>

          <li>
            <NavLink to="/sending-merch" className={s.nav__item}>
              <SendingMerchIcon />
              Отправка мерча
            </NavLink>
          </li>

          <li>
            <NavLink to="/analytics" className={s.nav__item}>
              <StatisticsIcon />
              Аналитика
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={s.nav}>
        <ul className={s.nav__list}>
          <li>
            <NavLink to="/setting" className={s.nav__item}>
              <StatisticsIcon />
              Настройка
            </NavLink>
          </li>

          <li>
            <NavLink to="/logout" className={s.nav__item}>
              <ExitIcon />
              Выход
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar