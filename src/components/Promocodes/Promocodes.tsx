import { HeaderContent } from "../HeaderContent/HeaderContent"
import { Content } from "../Content/Content"
import TablePromocodes from "../TablePromocodes/TablePromocodes"
import { Button } from "../../modules/ModalAddUser/FormAddUser/components/Button"
import style from './Promocodes.module.scss'

const Promocodes = () => {
  return (
    <Content>
      <div className={style.headerArea}>
      <HeaderContent>Промо-коды</HeaderContent>
      <Button
      primary
      type="button"
      >Добавить промо-код</Button>
      </div>
      <TablePromocodes />
    </Content>
  )
}

export default Promocodes
