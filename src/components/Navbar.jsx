import { Link, NavLink } from "react-router"

function Navbar() {
  return (
    <div>
        <div>
            <Link to="/">
                <h1>Logotyp</h1>
            </Link>
            <ul>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/Products">PRODUCTS</NavLink></li>
                <li><NavLink to="/Contacts">CONTACT</NavLink></li>
            </ul>
            <ul>
              <li>SEARCH</li>
              <li><NavLink to="/Login">Login</NavLink></li>
              <li>SHOPPING CART</li>
            </ul>
        </div>
    </div>
  )
}
export default Navbar