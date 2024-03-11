import { HeaderContent } from "../../components/HeaderContent/HeaderContent"
import { Content } from "../../components/Content/Content"
import TableLoyality from "../../components/TableLoyality/TableLoyality"
import { Search } from "../../modules/Search"

export const Loyality = () => {
  return (
    <Content>
      <HeaderContent>Программа лояльности</HeaderContent>
      <Search />
      <TableLoyality />
    </Content>
  )
}
