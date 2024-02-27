import { Outlet, Route, Routes } from "react-router-dom"
import style from "./App.module.scss"
import Header from "../Header/Header"
import Menu from "../Menu/Menu"
import SearchCustom from "../SearchCustom/SearchCustom"
import FilterList from "../FilterList/FilterList"

const App = () => {
  return (
    <div className={style.app}>
      <Routes>
        <Route
          path={"/"}
          element={
            <>
              <Header />
                <main className={style.main}>
          <Menu />
          <div className={style.main__ambassadors}>
          <SearchCustom />
          </div>
          {/* <Outlet /> */}
        </main>

            </>
          }
        ></Route>
      </Routes>
    </div>
  )
}

export default App
