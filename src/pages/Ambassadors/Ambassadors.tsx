import { useEffect } from "react"
import { Content } from "../../components/Content"
import { HeaderContent } from "../../components/HeaderContent"
import { TableComponent } from "../../components/TableComponent"
import { Search } from "../../modules/Search"
import { useAppDispatch } from "../../store/hooks"
import { getAmbassadors, getAmbassadorsFilters } from "../../store/api"

export const Ambassadors = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAmbassadorsFilters())
    dispatch(getAmbassadors())
    console.log(getAmbassadors());
  }, [dispatch])

  return (
    <Content>
      <HeaderContent>Список амбассадоров</HeaderContent>
     {/*  <Search /> */}
      <TableComponent />
    </Content>
  )
}
