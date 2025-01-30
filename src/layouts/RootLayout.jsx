import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function RootLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet />
        <Footer />
    </div>
  )
}
export default RootLayout