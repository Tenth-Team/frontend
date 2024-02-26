import { Popover } from "@mui/material"
import { Box, Modal, Typography } from "../../ui-kit"
import type { FC } from "react"
import { useState } from "react"

export const ModalContainer: FC = () => {
  const [isOpen, setOpen] = useState<boolean>(true)

  const toggleModal: () => void = () => {
    setOpen(prev => !prev)
  }
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "none",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1)",
    p: 8,
    borderRadius: 2,
  }

  return (
    <>
      <Modal
        open={isOpen}
        onClose={toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  )
}
