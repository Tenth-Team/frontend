import { Button } from "../../components/formElements/Button"
import { Box, Modal } from "@mui/material/"
import type { FC } from "react"
import { useEffect, useMemo, useState } from "react"
import s from "../ModalAddUser/styles.module.scss"
import style from "./ModalAddPromocode.module.scss"
import { BarcodeIconSVG, XIconSVG } from "../../ui-kit"
import { FormAddPromo } from "./FormAddPromo/FormAddPromo"
import type { AmbassadorRoot, Promocodes } from "../../store/ambassador/types"

type Props = {
  row: AmbassadorRoot
}
export const ModalAddPromocode: FC<Props> = ({ row }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [isValid, setIsValid] = useState<boolean>(true)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const promoCode = useMemo(() => {
    // const promoMap = new Map(row.promo_code.map(item => [item.id, item]))
    return row.promo_code.reduce((prev, curr) => {
      return prev.id > curr.id ? prev : curr
    }, {} as Promocodes)?.name
  }, [row.promo_code])

  useEffect(() => {
    if (row.promo_code.length) {
      setIsValid(false)
    } else {
      setIsValid(true)
    }
  }, [])

  return (
    <>
      {!isValid ? (
        <button type="button" disabled={true} className={style.modal__button}>
          {promoCode}
        </button>
      ) : (
        <Button
          secondary
          type="button"
          onClick={handleClickOpen}
          // disabled={!isValid}
          style={{
            borderRadius: `4px`,
            padding: `14px 0px 14px 16px`,
            width: `178px`,
            height: `48px`,
            border: `1px solid var(--gray-100)`,
          }}
        >
          {promoCode}
        </Button>
      )}
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
          <FormAddPromo
            onClick={handleClose}
            //onUpdate={handleUpdate}
            row={row}
          />
        </Box>
      </Modal>
    </>
  )
}
