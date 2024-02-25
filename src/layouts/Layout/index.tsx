import { Outlet } from "react-router-dom"
import styles from "./styles.module.scss"
import Header from "../../components/Header"
import Menu from "../../components/Menu"

export default function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.layout__container}>
        <Menu />
        <main className={styles.layout__main}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
