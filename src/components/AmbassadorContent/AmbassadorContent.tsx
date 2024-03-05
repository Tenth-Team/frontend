import { HeaderContent } from "../HeaderContent/HeaderContent"
import { Content } from "../Content/Content"
import TableAmbassadorContent from "../TableAmbassadorContent/TableAmbassadorContent"

const AmbassadorContent = () => {
  return (
    <Content>
      <HeaderContent>Контент амбассадоров</HeaderContent>
      <TableAmbassadorContent />
    </Content>
  )
}

export default AmbassadorContent
