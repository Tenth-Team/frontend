import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import * as page from "../pages"
import Layout from "../layouts/Layout"
import { Spinner } from "../ui-kit"
import { ModalAddUser } from "../modules/ModalAddUser"
import { Analytics } from "../components/Analytics"
import Settings from "../components/Settings/Settings"
import Promocodes from "../components/Promocodes/Promocodes"
import AmbassadorContent from "../components/AmbassadorContent/AmbassadorContent"
import SendingMerch from "../components/SendingMerch/SendingMerch"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/signin" element={<page.Login />} />

      <Route
        path="/"
        element={<Layout />}
        loader={() => <Spinner />}
        errorElement={<div>тут страница ошибки</div>}
      >
        <Route index element={<page.Ambassadors />} />

        <Route path="/promo-codes" element={<Promocodes />} />

        <Route
          path="/mailing-management"
          element={
            <div>
              <h1>Управление рассылками</h1>
            </div>
          }
        />

        <Route path="/loyalty-program" element={<page.Loyality />} />
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
