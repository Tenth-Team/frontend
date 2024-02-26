import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
// import * as page from "../pages"
import Layout from "../layouts/Layout"
import { Spinner } from "../ui-kit"
import { CustomizedDialogs } from "../modules/ModalContainer"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      loader={() => <Spinner />}
      errorElement={<div>тут страница ошибки</div>}
    >
      <Route
        index
        element={
          <div>
            <h1>Амбассадоры</h1>
          </div>
        }
      />

      <Route
        path="/promo-codes"
        element={
          <div>
            <h1>Промо-коды</h1>
          </div>
        }
      />
      <Route
        path="/loyalty-program"
        element={
          <div>
            <h1>Программа лояльности</h1>
          </div>
        }
      />
      <Route
        path="/ambassador-content"
        element={
          <div>
            <h1>Контент амбассадоров</h1>
          </div>
        }
      />
      <Route
        path="/sending-merch"
        element={
          <div>
            <h1>Отправка мерча</h1>
          </div>
        }
      />
      <Route
        path="/analytics"
        element={
          <div>
            <h1>Аналитика</h1>
          </div>
        }
      />
      <Route
        path="/setting"
        element={
          <div>
            <h1>Настройка</h1>
          </div>
        }
      />
      {/* Временно для Кодинга. */}
      <Route path="/modal" element={<CustomizedDialogs />} />
    </Route>,
  ),
  {
    basename: "/",
  },
)