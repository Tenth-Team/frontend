import { useEffect, useState } from "react"
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom"
import { checkToken } from "../../utils/tokenStorage"

export const ProtectedRoute = () => {
  const [isAuthenticated, setAuthenticated] = useState(() => checkToken())
  const navigation = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const token = checkToken()
    setAuthenticated(token)
  }, [])
  useEffect(() => {
    if (location.pathname === "/" && isAuthenticated) {
      navigation("/ambassadors")
    }
  }, [isAuthenticated, location.pathname, navigation])

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />
}
