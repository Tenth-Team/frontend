import { HeaderContent } from "../HeaderContent/HeaderContent"
import { Content } from "../Content/Content"
import TablePromocodes from "../TablePromocodes/TablePromocodes"
import { Button } from "../formElements"
import style from "./Promocodes.module.scss"
import { ModalAddPromocode } from "../../modules/ModalAddPromocode/ModalAddPromocode"
import { Search } from "../../modules/Search"

const Promocodes = () => {
  return (
    <Content>
      <div className={style.container}>
        <div className={style.container__area}>
          <HeaderContent>Промо-коды</HeaderContent>
          {/* <Search /> */}
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

export default Promocodes
