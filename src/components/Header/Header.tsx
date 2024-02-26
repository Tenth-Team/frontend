import style from "./Header.module.scss"
import SvgIcon from "@mui/material/SvgIcon"

const Header = () => {
  return (
    <header>
      <div className={style.header}>
        <SvgIcon sx={{ fontSize: 40, color: "#3F3F3F" }} className={style.header__icon}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.73 29.002C21.5542 29.305 21.3018 29.5566 20.9982 29.7315C20.6946 29.9064 20.3504 29.9984 20 29.9984C19.6496 29.9984 19.3054 29.9064 19.0018 29.7315C18.6982 29.5566 18.4458 29.305 18.27 29.002M30 25.002H10C10.7956 25.002 11.5587 24.6859 12.1213 24.1233C12.6839 23.5607 13 22.7976 13 22.002V17.002C13 15.1454 13.7375 13.365 15.0503 12.0522C16.363 10.7395 18.1435 10.002 20 10.002C21.8565 10.002 23.637 10.7395 24.9497 12.0522C26.2625 13.365 27 15.1454 27 17.002V22.002C27 22.7976 27.3161 23.5607 27.8787 24.1233C28.4413 24.6859 29.2044 25.002 30 25.002Z"
              stroke="#3F3F3F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </SvgIcon>
      </div>
      </header>
  )
}

export default Header
