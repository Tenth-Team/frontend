import { HeaderContent } from "../../components/HeaderContent/HeaderContent"
import { Content } from "../../components/Content/Content"
import { TableAmbassadorContent } from "../../components/TableAmbassadorContent/TableAmbassadorContent"
import { useAppDispatch } from "../../store/hooks"
import { useEffect } from "react"
import { getСontent } from "../../store/api"
import { Search } from "../../modules/Search"

export const AmbassadorsContent = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getСontent())
  }, [dispatch])

  return (
    <Content>
      <HeaderContent>Контент амбассадоров</HeaderContent>
      <Search />
      <TableAmbassadorContent />
    </Content>
  )
}
