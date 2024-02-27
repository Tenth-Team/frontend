import Button from "@mui/material/Button"
import { shadows } from "@mui/system"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Box,
} from "@mui/material/"
import CloseIcon from "@mui/icons-material/Close"
import type { FC } from "react"
import { useState } from "react"
import Form from "../Form"

export const CustomizedDialogs: FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const style = {
    bgcolor: "white",
    border: "none",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1)",
    p: 8,
    borderRadius: 2,
  }

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Box
          sx={{
            bgcolor: "white",
            border: "none",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1)",
            p: 8,
            borderRadius: 2,
          }}
        >
          <DialogTitle sx={{ m: 0, p: 0 }} id="customized-dialog-title">
            Modal title
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: theme => theme.palette.grey[900],
            }}
          >
            <CloseIcon className="" />
          </IconButton>
          <DialogContent>
            <Form />
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Save changes
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  )
}
