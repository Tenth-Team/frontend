import type { FC } from "react"
import { useState } from "react"
import style from "./SideBar.module.scss"
import { Link } from "react-router-dom"
import type { Theme } from "@mui/material"
import { Box, createStyles, createTheme } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"

type TypeSideBarProps = {
  onClick: () => void
}

export const SideBar: FC<TypeSideBarProps> = ({ onClick }) => {
  /* const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        "@global": {
          "*::-webkit-scrollbar": {
            width: "5px"
          },
          "*::-webkit-scrollbar-track": {
            background: "#E4EFEF"
          },
          "*::-webkit-scrollbar-thumb": {
            background: "#1D388F61",
            borderRadius: "2px"`
          }
        }
      })
  ; */

  const styles = (theme: Theme) =>
    createStyles({
      scrollBar: {
        "&::-webkit-scrollbar": {
          width: "0.4em",
        },
        "&::-webkit-scrollbar-track": {
          "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0,0,0,.1)",
          outline: "1px solid slategrey",
        },
      },
    })

  const NOTIFICATIONS_TODAY = [
    { id: 1, time: "19:48", name: "Казанцева Евгения Андреевна" },
    { id: 2, time: "17:23", name: "Соколова Валерия Игоревна" },
    { id: 3, time: "19:30", name: "Григорьева Алина Сергеевна" },
    { id: 4, time: "19:48", name: "Казанцева Евгения Андреевна" },
  ] as const

  const NOTIFICATIONS_YESTERDAY = [
    { id: 1, time: "19:48", name: "Казанцева Евгения Андреевна" },
    { id: 2, time: "17:23", name: "Соколова Валерия Игоревна" },
  ] as const

  const NOTIFICATIONS_NOT_READ = [
    { id: 1, time: "19:48", name: "Казанцева Евгения Андреевна" },
    { id: 2, time: "17:23", name: "Соколова Валерия Игоревна" },
    { id: 3, time: "19:30", name: "Григорьева Алина Сергеевна" },
    { id: 4, time: "19:48", name: "Жуков Артем Станиславович" },
  ] as const

  type NotificationValue = {
    id: number
    time: string
    name: string
  }

  let notificationItem = NOTIFICATIONS_NOT_READ.map(
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
