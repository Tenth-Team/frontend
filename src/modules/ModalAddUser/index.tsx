import Button from "@mui/material/Button"
import { DialogContent, Box, Modal } from "@mui/material/"
import type { FC } from "react"
import { useState } from "react"
import s from "./styles.module.scss"
import { UserIconSVG, XIconSVG } from "../../ui-kit"
import { FormAddUser } from "./FormAddUser"

export const ModalAddUser: FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>

      {/*
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      > */}

      <Modal
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={open}
      >
        <Box className={s.modal__contaner}>
          <div className={s.modal__header}>
            <h2 id="customized-dialog-title" className={s.modal__title}>
              <UserIconSVG className={s.modal__titleIcon} />
              Добавление нового Амбасадора
            </h2>
            <button
              className={s.modal__close}
              aria-label="close"
              onClick={handleClose}
            >
              <XIconSVG />
            </button>
          </div>

            <FormAddUser onClick={handleClose} />
        </Box>
      </Modal>
    </>
  )
}
