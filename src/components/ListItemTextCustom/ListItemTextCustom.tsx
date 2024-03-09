import { ListItemText } from "@mui/material"
import type { ListItemTextProps } from "@mui/material"

const ListItemTextCustom = (props: ListItemTextProps) => {
  return (
    <ListItemText disableTypography sx={{ fontSize: 14 }} {...props}>
      {props.children}
    </ListItemText>
  )
}
ListItemTextCustom.propTypes = {}

export default ListItemTextCustom
