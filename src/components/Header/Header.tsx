import { Button } from "@mui/material"
import type { FC } from "react"
import { useCallback, useState } from "react"
import { BellIconSVG, BellRedCircleIconSVG } from "../../ui-kit"
import style from "./Header.module.scss"
import { SideBar } from "./SideBar/SideBar"

const Header: FC = () => {
  const [newNotifications, setNewNotifications] = useState<boolean>(true)
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = useCallback(() => {
    if (open === false) {
      setOpen(true)
      setNewNotifications(false)
    } else {
      setOpen(false)
    }
  }, [open])

  const handleOverlayClick = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <>
      <header>
        <div className={style.header}>
          <Button className={style.header__icon} onClick={handleClickOpen}>
            {!newNotifications ? <BellIconSVG /> : <BellRedCircleIconSVG />}
          </Button>
        </div>
      </header>
      <SideBar isOpen={open} onClick={handleOverlayClick} />
    </>
  )
}

export default Header
