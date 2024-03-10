import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import * as page from "../pages"
import Layout from "../layouts/Layout"
import { Spinner } from "../ui-kit"
import { ModalAddUser } from "../modules/ModalAddUser"
import { Mailing } from "../pages/Mailing"

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

        <Route path="/promo-codes" element={<page.Promocodes />} />

        <Route
          path="/mailing-management"
          element={
            <Mailing />
          }
        />

        <Route path="/loyalty-program" element={<page.Loyality />} />
        <Route path="/ambassador-content" element={<page.AmbassadorContent />} />
        <Route path="/sending-merch" element={<page.SendingMerch />} />
        <Route path="/analytics" element={<page.Analytics />} />
        <Route path="/setting" element={<page.Settings />} />
        {/* Временно для Кодинга. */}
        <Route path="/modal" element={<ModalAddUser />} />
      </Route>
    </>,
  ),
  {
    basename: "/",
  },
)
