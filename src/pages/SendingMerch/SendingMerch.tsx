import { HeaderContent } from "../../components/HeaderContent/HeaderContent"
import { Content } from "../../components/Content/Content"
import TableMerch from "../../components/TableMerch/TableMerch"

const SendingMerch = () => {
  return (
    <Content>
      <HeaderContent>Отправка мерча</HeaderContent>
      {/* <Search /> */}
      <TableMerch />
    </Content>
  )
}

export { SendingMerch }
