import { Link, NavLink } from "react-router"
import { useShoppingCartContext } from "../contexts/ShoppingCartContext"
import ShoppingCartList from "./ShoppingCartList"
import '../index.css'
import { TiShoppingCart } from "react-icons/ti";
import logo from '../logo/Logo.svg'
import { useMessageContext } from "../contexts/MessageContext";

function Navbar() {
  const { totalQuantity } = useShoppingCartContext()
  const { setCartIsOpen } = useShoppingCartContext()
  const { cartIsOpen } = useShoppingCartContext()
  const { setIsMessageSubmitted } = useMessageContext()
  const { shoppingItems } = useShoppingCartContext()

  return (
    <nav className='border-4 border-indigo-500 p-8 '>
        <div className='container flex m-auto items-center justify-between'>

          <div>
            <Link to="/" className='inline' onClick={() => setIsMessageSubmitted(false)}>
              <img className='flex inline m-0' src={logo}></img>
            </Link>
          </div>

          <div className='flex '>
            <ul className='flex gap-4 mx-6'>
                <li className=''><NavLink to="/" onClick={() => setIsMessageSubmitted(false)}>HOME</NavLink></li>
                <li className=''><NavLink to="/Products" onClick={() => setIsMessageSubmitted(false)}>PRODUCTS</NavLink></li>
                <li className=''><NavLink to="/Contacts" onClick={() => setIsMessageSubmitted(false)}>CONTACT</NavLink></li>
            </ul>
            <ul className='flex gap-3'>
              <li className=''>SEARCH</li>
              <li className=''><NavLink to="/Login" onClick={() => setIsMessageSubmitted(false)}>Login</NavLink></li>
              
              
                  <button onClick={() => setCartIsOpen(state => !state)}><TiShoppingCart /></button>
                  <div className='relative'>
                  { totalQuantity != 0 
                    ? 
                    <span className='text-sm absolute -top-3 -right-3 rounded-full py-1 px-2.5 bg-red-400' onClick={() => setCartIsOpen(state => !state)}>
                        {totalQuantity}
                    </span>
                    
                    : ''}
              </div>

              { cartIsOpen && 
              <div className='modal-backdrop inset-0' onClick={() => setCartIsOpen(state => !state)}>
                  
                </div>
              }

              <div className='relative'>
              { cartIsOpen &&
              
              <div className='modal bg-white rounded-md' onClick={e => e.stopPropagation()}> 
              { shoppingItems.length > 0 
              ? 
              <>
                  <ShoppingCartList />
                  <button className='m-3 p-3 border-3 border-solid rounded-md text-lg'><NavLink to="/Checkout" onClick={() => setCartIsOpen(state => !state)}>Checkout</NavLink></button>
              </>
              : 'Your cart is empty'}
          </div>
            }

              </div>
              
            </ul>

            </div>
            
        </div>
    </nav>
  )
}
export default Navbar