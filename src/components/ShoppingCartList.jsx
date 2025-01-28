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
            <div key={product.product.product._id}>
              <ShoppingCartItem product={product}/>
            </div>
          ))
          
        }
        
        { shoppingItems.length > 0 && 
        <>
            <div>Total: { sum } kr</div>
            <button onClick={() => removeAllItems()}>Hejdå alla</button>
        </>
        }
        </ul>
    </div>
  )
}

export default ShoppingCartList