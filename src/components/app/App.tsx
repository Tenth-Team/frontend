import { Route, Routes } from "react-router-dom"
import style from "./App.module.scss"
import Header from "../Header/Header"

const App = () => {
  return (
    <div className={style.app}>
      <Routes>
        <Route
          path={"/"}
          element={
            <>
              <Header />
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
