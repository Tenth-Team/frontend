import { useEffect } from "react"
import { Content } from "../../components/Content"
import { HeaderContent } from "../../components/HeaderContent"
import { TableComponent } from "../../components/TableComponent"
import { useAppDispatch } from "../../store/hooks"
import { getAmbassadors, getAmbassadorsFilters } from "../../store/api"
import style from "./Ambassadors.module.scss"
import { IconButton } from "../../components/formElements/IconButton"
import { Button } from "../../components/formElements/Button"
import { ArchiveBoxIconSVG, UserPlusIconSVG } from "../../ui-kit"
import { Search } from "../../modules/Search"

export const Ambassadors = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAmbassadorsFilters())
    dispatch(getAmbassadors())
    console.log(getAmbassadors())
  }, [dispatch])

  const styleButton = {
    width: "176px",
    display: "flex",
    justifyContent: "center",
  }

  const styleIconButton = {
    marginLeft: "auto",
    marginRight: "16px",
    alignSelf: "center",
  }

  return (
    <Content>
      <div className={style.container}>
        <HeaderContent>Список амбассадоров</HeaderContent>
        <IconButton
          big
          onClick={() => {
            console.log("onClick")
          }}
          icon={<ArchiveBoxIconSVG />}
          type="button"
          style={styleIconButton}
        ></IconButton>
        <div className={style.container__button}>
          <Button primary type="button" style={styleButton} onClick={() => {}}>
            <UserPlusIconSVG className={style.container__button} />
            Добавить{" "}
          </Button>
        </div>
      </div>
      {/* <Search /> */}
      <TableComponent />
    </Content>
  )
}
