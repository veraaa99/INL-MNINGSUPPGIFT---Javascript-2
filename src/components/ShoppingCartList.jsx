import { useEffect, } from "react"
import { useShoppingCartContext } from "../contexts/ShoppingCartContext"
import ShoppingCartItem from "./ShoppingCartItem"

function ShoppingCartList() {

  const { shoppingItems } = useShoppingCartContext()
  let { sum } = useShoppingCartContext()
  const { calculateSum } = useShoppingCartContext()
  const { removeAllItems } = useShoppingCartContext()
  const { cartIsOpen } = useShoppingCartContext()

  useEffect(() => {
    calculateSum()
  }, [])

  return (
    <div>
      <ul>
        {
           shoppingItems.map((product) => ( 
            <div className='p-3' key={product.product.product._id}>
              <ShoppingCartItem product={product}/>
            </div>
          ))
          
        }
        
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