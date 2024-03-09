import { HeaderContent } from "../../components/HeaderContent/HeaderContent"
import { Content } from "../../components/Content/Content"
import { TableAmbassadorContent } from "../../components/TableAmbassadorContent/TableAmbassadorContent"
import { useAppDispatch } from "../../store/hooks"
import { useEffect } from "react"
import { getСontent } from "../../store/api"

export const AmbassadorContent = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getСontent())
    console.log(getСontent())
  }, [dispatch])

  return (
    <Content>
      <HeaderContent>Контент амбассадоров</HeaderContent>
      {/* <Search /> */}
      <TableAmbassadorContent />
    </Content>
  )
}
