import type { BoxProps } from "@mui/material"
import { Box } from "@mui/material"

const BoxCustom = (props: BoxProps) => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2} {...props}>
      {props.children}
    </Box>
  )
}
BoxCustom.propTypes = {}

export default BoxCustom
