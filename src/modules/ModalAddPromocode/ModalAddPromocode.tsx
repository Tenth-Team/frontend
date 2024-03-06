import Button from "@mui/material/Button"
import { Box, Modal } from "@mui/material/"
import type { FC } from "react"
import { useState } from "react"
import s from "../ModalAddUser/styles.module.scss"
import style from "./ModalAddPromocode.module.scss"
import { BarcodeIconSVG, XIconSVG } from "../../ui-kit"
import { FormAddPromo } from "./FormAddPromo/FormAddPromo"

export const ModalAddPromocode: FC = () => {
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
        <Box className={`${style.modal__contaner} ${s.modal__contaner}`}>
          <div className={s.modal__header}>
            <h2 id="customized-dialog-title" className={s.modal__title}>
              <BarcodeIconSVG className={s.modal__titleIcon} />
              Новый промо-код
            </h2>
            <button
              className={s.modal__close}
              aria-label="close"
              onClick={handleClose}
            >
              <XIconSVG />
            </button>
            
          </div>
          <FormAddPromo onClick={handleClose}/>
        </Box>
      </Modal>
    </>
  )
}
