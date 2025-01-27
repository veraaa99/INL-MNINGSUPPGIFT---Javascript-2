import { Link, NavLink } from "react-router"
import { useShoppingCartContext } from "../contexts/ShoppingCartContext"

function Navbar() {

  const { totalQuantity } = useShoppingCartContext()
  const { setCartIsOpen } = useShoppingCartContext()

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
              { totalQuantity != 0 
              ? totalQuantity 
              : ''}
              <button onClick={() => setCartIsOpen(state => !state)}>Öppna</button>
            </ul>
        </div>
    </div>
  )
}
export default Navbar