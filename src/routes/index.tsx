import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import * as page from "../pages"
import Layout from "../layouts/Layout"
import { ModalAddUser } from "../modules/ModalAddUser"
import { ProtectedRoute } from "./ProtectedReute"
import { Mailing } from "../pages/Mailing"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/signin" element={<page.Login />} />

      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/" element={<Layout />}>
          <Route path="/ambassadors">
            <Route index element={<page.Ambassadors />} />
            <Route path="/ambassadors/:id" element={<page.AmbassadorCard />} />
          </Route>

          <Route path="/promo-codes" element={<page.Promocodes />} />

          <Route path="/mailing-management" element={<Mailing />} />

          <Route path="/loyalty-program" element={<page.Loyality />} />
          <Route
            path="/ambassadors-content"
            element={<page.AmbassadorsContent />}
          />
          <Route path="/sending-merch" element={<page.SendingMerch />} />
          <Route path="/analytics" element={<page.Analytics />} />
          <Route path="/setting" element={<page.Settings />} />
          {/* Временно для Кодинга. */}
          <Route path="/modal" element={<ModalAddUser />} />
        </Route>
      </Route>
    </>,
  ),
  {
    basename: "/",
  },
)
