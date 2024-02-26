import type { MenuItemProps } from "@mui/material/MenuItem"
import MenuItem from "@mui/material/MenuItem"

const MenuItemCustom = (props: MenuItemProps) => {
  return (
    <MenuItem
      sx={{
        backgroundColor: "#fff",
        borderRadius: 2,

        "&.MuiMenuItem-root": {
          "&:hover": {
            border: 3,
            borderRadius: 1,
            borderStyle: "solid",
            borderColor: "#ac9ff0",
            backgroundColor: "#fff",
            color: "#3918d9",
          },
          "&:active": {
            backgroundColor: "#4c34c2",
            color: "#fff",
          },
          "&:focus": {
            color: "#3918d9",
          },
          "&:disabled": {
            backgroundColor: "#f5f5f5",
            color: "#9e9e9e",
          },
        },
      }}
      {...props}
    >
      {props.children}
    </MenuItem>
  )
}
MenuItemCustom.propTypes = {}

export default MenuItemCustom
