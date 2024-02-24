import type { MenuListProps } from "@mui/material"
import { MenuList } from "@mui/material"

const MenuListCustom = (props: MenuListProps) => {
  return (
    <MenuList
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "0",
      }}
      {...props}
    >
      {props.children}
    </MenuList>
  )
}
MenuListCustom.propTypes = {}

export default MenuListCustom
