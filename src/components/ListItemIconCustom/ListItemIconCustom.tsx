import type { ListItemIconProps } from "@mui/material"
import { ListItemIcon } from "@mui/material"

const ListItemIconCustom = (props: ListItemIconProps) => {
  return (
    <ListItemIcon
      sx={{
        "&.MuiListItemIcon-root": {
          minWidth: `26px`,
        },
      }}
      {...props}
    >
      {props.children}
    </ListItemIcon>
  )
}
ListItemIconCustom.propTypes = {}

export default ListItemIconCustom
