import type { FC } from "react"
import s from "./styles.module.scss"
import { Box, Modal, UserIconSVG, XIconSVG } from "../../ui-kit"
import { FormAddUser } from "./FormAddUser"
import { IconButton } from "../../components/formElements"

type TypeModalAddUser = {
  isOpen: boolean
  onClose: () => void
}

export const ModalAddUser: FC<TypeModalAddUser> = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={isOpen}
      >
        <Box className={s.modal__contaner}>
          <div className={s.modal__header}>
            <h2 id="customized-dialog-title" className={s.modal__title}>
              <UserIconSVG className={s.modal__titleIcon} />
              Добавление нового Амбасадора
            </h2>
            <IconButton big onClick={onClose} icon={<XIconSVG />} />
          </div>

          <FormAddUser onClick={onClose} />
        </Box>
      </Modal>
    </>
  )
}
