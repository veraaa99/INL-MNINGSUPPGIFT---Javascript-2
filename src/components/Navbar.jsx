import { Link, NavLink } from "react-router"
import { useShoppingCartContext } from "../contexts/ShoppingCartContext"
import ShoppingCartList from "./ShoppingCartList"
import '../index.css'

function Navbar() {

  const { totalQuantity } = useShoppingCartContext()
  const { setCartIsOpen } = useShoppingCartContext()
  const { cartIsOpen } = useShoppingCartContext()
  const { isMessageSubmitted } = useShoppingCartContext()
  const { setIsMessageSubmitted} = useShoppingCartContext()
  

  return (
    <nav className='border-4 border-indigo-500 p-8'>
        <div className='container flex m-auto items-center justify-between'>

          <div>
          <Link to="/" onClick={() => setIsMessageSubmitted(previousState => !previousState)}>
                <h1>Logotyp</h1>
            </Link>
          </div>


          <div className='flex'>
            <ul className='flex gap-4 mx-6'>
                <li className=''><NavLink to="/" onClick={() => setIsMessageSubmitted(previousState => !previousState)}>HOME</NavLink></li>
                <li className=''><NavLink to="/Products" onClick={() => setIsMessageSubmitted(previousState => !previousState)}>PRODUCTS</NavLink></li>
                <li className=''><NavLink to="/Contacts" onClick={() => setIsMessageSubmitted(previousState => !previousState)}>CONTACT</NavLink></li>
            </ul>
            <ul className='flex gap-3'>
              <li className=''>SEARCH</li>
              <li className=''><NavLink to="/Login" onClick={() => setIsMessageSubmitted(previousState => !previousState)}>Login</NavLink></li>
              <button onClick={() => setCartIsOpen(state => !state)}>Öppna</button>
              { totalQuantity != 0 
                ? totalQuantity
                : ''}

              { cartIsOpen && 
                <div className='modal-backdrop' onClick={() => setCartIsOpen(state => !state)}>
                  <div className='modal' onClick={e => e.stopPropagation()}> 
                      { totalQuantity != 0 
                      ? 
                      <>
                          <ShoppingCartList />
                          <button><NavLink to="/Checkout">Checkout</NavLink></button>
                      </>
                      : 'Your cart is empty'}
                  </div>
                </div>
              }
              
            </ul>

            </div>
            
        </div>
    </nav>
  )
}
export default Navbar