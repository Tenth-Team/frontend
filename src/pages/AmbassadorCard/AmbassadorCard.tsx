import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch } from "../../store/hooks"
import { getAmbassador } from "../../store/api"

export const AmbassadorCard = () => {
  const { id } = useParams()
  console.log(id)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (id) {
      dispatch(getAmbassador({ id }))
    }
  }, [id, dispatch])

  return <div>{id}</div>
}
