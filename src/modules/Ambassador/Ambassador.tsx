import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch } from "../../store/hooks"
import { getAmbassador } from "../../store/api"
import { HeaderCard } from "./HeaderCard"

import { AmbassadorForm } from "./HeaderCard/AmbassadorForm"

export const Ambassador = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const [isEditMode, setEditMode] = useState(false)
  const [isDisabledSubmit, setDisabledSubmit] = useState(true)

  useEffect(() => {
    if (id) {
      dispatch(getAmbassador({ id }))
    }
  }, [id, dispatch])

  return (
    <div>
      <HeaderCard
        // handleSubmit={handleSubmit}
        isEditMode={isEditMode}
        onToggleEditMode={() => setEditMode(prev => !prev)}
        isDisabledSubmit={isDisabledSubmit}
      />
      <div>
        <AmbassadorForm
          setDisabledSubmit={setDisabledSubmit}
          isEditMode={!isEditMode}
        />
      </div>
    </div>
  )
}
