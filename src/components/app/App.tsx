import { Route, Routes } from "react-router-dom"
import { ThemeProvider } from '@mui/material/styles';
import style from "./App.module.scss"
import Header from "../Header/Header"
import Main from "../Main/Main"
import Menu from "../Menu/Menu"
import theme from "../../assets/theme"


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className={style.app}>
        <Routes>
          <Route
            path={"/"}
            element={
              <>
                <Header />
                  <main className={style.main}>
                    <Menu />
                    <Main />
                  </main>

              </>
            }
          ></Route>
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
