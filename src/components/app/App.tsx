import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from '@mui/material/styles';
import { router } from "../../routes"
import theme from "../../assets/theme"

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}
