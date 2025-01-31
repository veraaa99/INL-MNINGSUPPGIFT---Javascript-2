import { useEffect, } from "react"
import { useShoppingCartContext } from "../contexts/ShoppingCartContext"
import ShoppingCartItem from "./ShoppingCartItem"

// Shopping cart list component
function ShoppingCartList() {

  // Import states and functions from Shopping Cart context
  const { shoppingItems } = useShoppingCartContext()
  let { sum } = useShoppingCartContext()
  const { calculateSum } = useShoppingCartContext()
  const { removeAllItems } = useShoppingCartContext()

  // Calculate total sum when the list is rendered
  useEffect(() => {
    calculateSum()
  }, [])

  // Shopping list
  return (
    <div>
      <ul>
        {/* List with all the products added to the shopping cart (shown through ShoppingCartItem-components) */}
        {
           shoppingItems.map((product) => ( 
            <div className='p-3' key={product.product.product._id}>
              <ShoppingCartItem product={product}/>
            </div>
          ))
        }
        
        {/* Total sum of all added product's prices, and a button to remove all items from the shopping cart */}
        { shoppingItems.length > 0 && 
        <div className='p-3 mt-10'>
            <div className='text-lg'>Total: { sum } kr</div>
            <button className='cursor-pointer hover:bg-red-400 hover:text-white border-slate-400 p-2 border-1 border-solid rounded-md mt-2' onClick={() => removeAllItems()}>Remove all items</button>
        </div>
        }
      </ul>
  </div>
  )
}

export default ShoppingCartList