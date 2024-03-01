import type { FC } from "react"
import style from "./SideBar.module.scss"
import { Link } from "react-router-dom"
import {NOTIFICATIONS_NOT_READ} from '../../../assets/constants/constants'

type TypeSideBarProps = {
  onClick: () => void
}

export const SideBar: FC<TypeSideBarProps> = ({ onClick }) => {

  type NotificationValue = {
    id: number
    time: string
    name: string
  }

  const notificationItem = NOTIFICATIONS_NOT_READ.map(
    (item: NotificationValue) => {
      return (
        <li className={style.sidebar__notification} key={item.id}>
          <p className={style.sidebar__message}>{item.time}</p>
          <p className={style.sidebar__message}>
            <Link to={"/"}>
              <span className={style.sidebar__message_coloredPrimary}>
                {item.name}
              </span>
            </Link>
            <span className={style.sidebar__message_coloredGrey}>
              {item.name.endsWith("вна") ? " добавилa " : " добавил "}{" "}
            </span>
            <Link to={"/"}>
              <span className={style.sidebar__message_coloredPrimary}>
                новый контент
              </span>
            </Link>
          </p>
        </li>
      )
    },
  )

  return (
    <div
      className={`${style.sidebar} ${style.sidebar_opened}`}
      onClick={onClick}
    >
      <section className={style.sidebar__container}>
        <h2 className={style.sidebar__title}>Уведомления</h2>
        <ul className={`${style.sidebar__items} `}>
          <li className={style.sidebar__item}>
            <h3
              className={`${style.sidebar__itemTitle} ${style.sidebar__itemTitle_colored}`}
            >
              Непрочитанные
            </h3>

            <ul className={style.sidebar__notificationArea}>
              {notificationItem}
            </ul>
          </li>
          <li className={style.sidebar__item}>
            <h3 className={style.sidebar__itemTitle}>Сегодня</h3>
            <ul className={style.sidebar__notificationArea}>
              {notificationItem}
            </ul>
          </li>
          <li className={style.sidebar__item}>
            <h3 className={style.sidebar__itemTitle}>Вчера</h3>
            <ul className={style.sidebar__notificationArea}>
              {notificationItem}
            </ul>
          </li>
          <li className={style.sidebar__item}>
            <h3 className={style.sidebar__itemTitle}>Ранее</h3>
          </li>
        </ul>
      </section>
    </div>
  )
}
