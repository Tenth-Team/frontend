import type { MenuItemProps } from "@mui/material/MenuItem"
import MenuItem from "@mui/material/MenuItem"

const MenuItemFilter = (props: MenuItemProps) => {
  return (
    <MenuItem sx={{padding:`6px`}}
    {...props} >
       {props.children}
    </MenuItem>

)
}
MenuItemFilter.propTypes = {}

export default MenuItemFilter
