import type { PaperProps } from "@mui/material/Paper"
import Paper from "@mui/material/Paper"

const PaperCustom = (props: PaperProps) => {
  return (
    <Paper
      sx={{
        width: 256,
        maxWidth: "100%",
        height: "100%",
        backgroundColor: "#f5f5f5",
        boxShadow: "none",
        border: "none",
        borderRadius: "0",
        p: 2,
        display: "flex",
        flexDirection: "column",
      }}
      {...props}
    >
      {props.children}
    </Paper>
  )
}
PaperCustom.propTypes = {}

export default PaperCustom
