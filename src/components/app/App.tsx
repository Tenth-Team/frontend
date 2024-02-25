import { RouterProvider } from "react-router-dom"

import { router } from "../../routes"
import { LinearProgress } from "../../ui-kit"

const App = () => {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<LinearProgress color="secondary" />}
    />
  )
}

export default App
