import Table from "../TableComponent/TableComponent"
import { HeaderContent } from "../HeaderContent/HeaderContent"
import { Content } from "../Content/Content"
import style from './Main.module.scss'
import { IconButton } from "../formElements/IconButton"
import { ArchiveBoxIconSVG } from "../../ui-kit"
import { Button } from "../formElements/Button"

const Main = () => {
  return (
    <Content>
  <div 
  className={style.container}
  >
      <HeaderContent>Список амбассадоров</HeaderContent>
      <IconButton
       small
       onClick={() => {
         console.log("onClick")
       }}
       icon={<ArchiveBoxIconSVG />}
       type="button">
      </IconButton>
      <Button primary type="button">Добавить </Button>

      </div>
      <Table />
    </Content>
  )
}

export default Main
