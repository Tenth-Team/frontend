import { HeaderContent } from "../../components/HeaderContent/HeaderContent"
import { Content } from "../../components/Content/Content"
import TableAmbassadorContent from "../../components/TableAmbassadorContent/TableAmbassadorContent"

const AmbassadorContent = () => {
  return (
    <Content>
      <HeaderContent>Контент амбассадоров</HeaderContent>
      <TableAmbassadorContent />
    </Content>
  )
}

export { AmbassadorContent }
