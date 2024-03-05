import style from "./Main.module.scss"
import Table from "../TableComponent/TableComponent"
import { HeaderContent } from "../HeaderContent/HeaderContent"
import { Content } from "../Content/Content"

const Main = () => {
  return (
    <Content>
      <HeaderContent>Список амбассадоров</HeaderContent>
      <Table />
    </Content>
  )
}

export default Main
