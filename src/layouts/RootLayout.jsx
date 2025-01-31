import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

// Root layout (Including Navbar component, Outlet and Footer component)
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