import { Button } from "@mui/material"
import type { FC } from "react"
import { useState } from "react"
import { BellIconSVG, BellRedCircleIconSVG } from "../../ui-kit"
import style from "./Header.module.scss"
import { SideBar } from "./SideBar/SideBar"

const Header: FC = () => {
  const [newNotifications, setNewNotifications] = useState<boolean>(true)
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = () => {
    if (open === false) {
      setOpen(true)
      setNewNotifications(false)
    } else {
      setOpen(false)
    }
  }

  const handleOverlayClick = () => {
    setOpen(false)
  }

  return (
    <header>
      <div className={style.header}>
        <Button className={style.header__icon} onClick={handleClickOpen}>
          {!newNotifications ? <BellIconSVG /> : <BellRedCircleIconSVG />}
        </Button>
        {open && <SideBar onClick={handleOverlayClick} />}
      </div>
    </header>
  )
}

export default Header
