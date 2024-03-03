import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
// import * as page from "../pages"
import Layout from "../layouts/Layout"
import { Spinner } from "../ui-kit"
import Main from "../components/Main/Main"
import { ModalAddUser } from "../modules/ModalAddUser"
import { Login } from "../components/Login"
import { Analytics } from "../components/Analytics"
import Loyality from "../components/Loyality/Loyality"
import Settings from "../components/Settings/Settings"
import Promocodes from "../components/Promocodes/Promocodes"
import AmbassadorContent from "../components/AmbassadorContent/AmbassadorContent"
import SendingMerch from "../components/SendingMerch/SendingMerch"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/signin" element={<Login />} />

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
              <Main />
            </div>
          }
        />

        <Route path="/promo-codes" element={<Promocodes />} />

        <Route
          path="/mailing-management"
          element={
            <div>
              <h1>Управление рассылками</h1>
            </div>
          }
        />

        <Route path="/loyalty-program" element={<Loyality />} />
        <Route path="/ambassador-content" element={<AmbassadorContent />} />
        <Route path="/sending-merch" element={<SendingMerch />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/setting" element={<Settings />} />
        {/* Временно для Кодинга. */}
        <Route path="/modal" element={<ModalAddUser />} />
      </Route>
    </>,
  ),
  {
    basename: "/",
  },
)
