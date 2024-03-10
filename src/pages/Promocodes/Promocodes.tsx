import { HeaderContent } from "../../components/HeaderContent/HeaderContent"
import { Content } from "../../components/Content/Content"
import TablePromocodes from "../../components/TablePromocodes/TablePromocodes"
import { Button } from "../../components/formElements"
import style from "./Promocodes.module.scss"
import { Search } from "../../modules/Search"
import { useEffect } from "react"
import { useAppDispatch } from "../../store/hooks"
import { getAmbassadors, getAmbassadorsFilters, getPromocodes } from "../../store/api"

const Promocodes = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAmbassadorsFilters())
    dispatch(getAmbassadors())
  }, [dispatch])


  return (
    <Content>
      <div className={style.container}>
        <div className={style.container__area}>
          <HeaderContent>Промо-коды</HeaderContent>
          <Search />
        </div>
        <div className={style.container__area}>
          <Button primary type="button">
            Добавить промо-код
          </Button>
          <Button
            secondary
            type="submit"
            /* disabled */
          >
            Сохранить изменения
          </Button>
        </div>
      </div>

      <TablePromocodes />
    </Content>
  )
}

export { Promocodes }