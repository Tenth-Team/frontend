import { useNavigate } from "react-router-dom"
import { Button, IconButton } from "../../../components/formElements"
import { ArchiveBoxIconSVG, ChevronLeftIconSVG } from "../../../ui-kit"
import { useAppSelector } from "../../../store/hooks"
import { getAmbassadorData } from "../../../store/selectors"
import { Switch } from "./Switch"
import s from "./HeaderCard.module.scss"
import type { FC } from "react"

export const HeaderCard: FC<{
  isEditMode: boolean
  isDisabledSubmit: boolean
  onToggleEditMode: () => void
}> = ({ isEditMode, onToggleEditMode, isDisabledSubmit = false }) => {
  const {
    ambassadorCard: { full_name, id },
  } = useAppSelector(getAmbassadorData)
  const navigate = useNavigate()

  const goBack = () => {
    return window.history.length > 1 ? navigate(-1) : navigate("/ambassadors")
  }

  return (
    <div className={s.header}>
      <div className={s.header__wrapper}>
        <IconButton icon={<ChevronLeftIconSVG />} big onClick={goBack} />
        <div className={s.header__titleWrapper}>
          <h2 className={s.header__title}>{full_name}</h2>
          <span className={s.header__subtitle}>ID: {id}</span>
        </div>
      </div>
      <div className={s.header__buttons}>
        {isEditMode ? (
          <Button
            form="ambassador"
            type="submit"
            disabled={isDisabledSubmit}
            primary
          >
            Сохранить
          </Button>
        ) : null}
        <IconButton big icon={<ArchiveBoxIconSVG />} />
        <Switch checked={isEditMode} onCheck={onToggleEditMode} />
      </div>
    </div>
  )
}
