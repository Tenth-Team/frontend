import { Route, Routes } from "react-router-dom"
import style from "./App.module.scss"
import Header from "../Header/Header"
import Main from "../Main/Main"

const App = () => {
  return (
    <div className={style.app}>
      <Routes>
        <Route
          path={"/"}
          element={
            <>
              <Header />
              <Main />
              {/*  <main className={style.main}>
          <Menu />
          <Outlet />
        </main>
      */}
            </>
          }
        ></Route>
      </Routes>
    </div>
  )
}

export default App
