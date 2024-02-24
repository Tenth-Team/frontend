import { Box } from "@mui/material"

import PaperCustom from "../PaperCustom/PaperCustom"
import MenuListCustom from "../MenuListCustom/MenuListCustom"
import ListItemTextCustom from "../ListItemTextCustom/ListItemTextCustom"
import MenuItemCustom from "../MenuItemCustom/MenuItemCustom"
import ListItemIconCustom from "../ListItemIconCustom/ListItemIconCustom"

import UsersIcon from "../../assets/images/UsersIconDark.svg?react"
import ExitIcon from "../../assets/images/right.svg?react"
import ChatIcon from "../../assets/images/chatIcon.svg?react"
import AmbassadorContentIcon from "../../assets/images/clipboardTextIcon.svg?react"
import ProgrammLoyalityIcon from "../../assets/images/commandIcon.svg?react"
import SettingIcon from "../../assets/images/settingIcon.svg?react"
import SendingMerchIcon from "../../assets/images/cubeIcon.svg?react"
import PromocodeIcon from "../../assets/images/barcodeIcon.svg?react"
import StatisticsIcon from "../../assets/images/chartPieIcon.svg?react"

import style from "./Menu.module.scss"

const Menu = () => {
  return (
    <nav className={style.menu}>
      <PaperCustom>
        <MenuListCustom>
          <Box display={"flex"} flexDirection={"column"} gap={2}>
            <MenuItemCustom>
              <ListItemIconCustom>
                <UsersIcon />
              </ListItemIconCustom>
              <ListItemTextCustom>Амбассадоры</ListItemTextCustom>
            </MenuItemCustom>
            <MenuItemCustom>
              <ListItemIconCustom>
                <PromocodeIcon />
              </ListItemIconCustom>
              <ListItemTextCustom>Промокоды</ListItemTextCustom>
            </MenuItemCustom>

            <MenuItemCustom>
              <ListItemIconCustom>
                <ChatIcon />
              </ListItemIconCustom>
              <ListItemTextCustom>Управление рассылками</ListItemTextCustom>
            </MenuItemCustom>
            <MenuItemCustom>
              <ListItemIconCustom>
                <AmbassadorContentIcon />
              </ListItemIconCustom>
              <ListItemTextCustom>Контент амбассадоров</ListItemTextCustom>
            </MenuItemCustom>
            <MenuItemCustom>
              <ListItemIconCustom>
                <ProgrammLoyalityIcon />
              </ListItemIconCustom>
              <ListItemTextCustom>Программа лояльности</ListItemTextCustom>
            </MenuItemCustom>
            <MenuItemCustom>
              <ListItemIconCustom>
                <SendingMerchIcon />
              </ListItemIconCustom>
              <ListItemTextCustom>Отправка мерча</ListItemTextCustom>
            </MenuItemCustom>

            <MenuItemCustom>
              <ListItemIconCustom>
                <StatisticsIcon />
              </ListItemIconCustom>
              <ListItemTextCustom>Аналитика</ListItemTextCustom>
            </MenuItemCustom>
          </Box>

          <Box display={"flex"} flexDirection={"column"} gap={2} mt={"auto"}>
            <MenuItemCustom>
              <ListItemIconCustom>
                <SettingIcon />
              </ListItemIconCustom>
              <ListItemTextCustom>Настройки</ListItemTextCustom>
            </MenuItemCustom>
            <MenuItemCustom>
              <ListItemIconCustom>
                <ExitIcon />
              </ListItemIconCustom>
              <ListItemTextCustom>Выйти</ListItemTextCustom>
            </MenuItemCustom>
          </Box>
        </MenuListCustom>
      </PaperCustom>
    </nav>
  )
}

export default Menu
