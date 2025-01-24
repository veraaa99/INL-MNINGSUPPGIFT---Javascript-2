import { useContext, useEffect, useReducer, useState } from "react"
import { ShoppingCartContext, useShoppingCartContext } from "../contexts/ShoppingCartContext"
import SetQuantityButton from "./SetQuantityButton"
import useSum from "../hooks/useSum"
import useQuantityChange from "../hooks/useQuantityChange"
import SetShoppingCartQuantityButton from "./setShoppingCartQuantityButton"
import ShoppingCartItem from "./ShoppingCartItem"

function ShoppingCartList() {

  const { shoppingItems } = useShoppingCartContext()
  const { getShoppingList } = useShoppingCartContext()
  const { increaseShoppingCartQuantity, increaseProductQuantity, decreaseProductQuantity, productQuantity, setProductQuantity, quantity } = useQuantityChange()
  let { sum } = useShoppingCartContext()
  const { calculateSum } = useShoppingCartContext()
  const { addToCart } = useShoppingCartContext()
  const { removeAllItems } = useShoppingCartContext()

  const { state3 } = useShoppingCartContext()
  const { setState3 } = useShoppingCartContext()

  useEffect(() => {
    calculateSum()
  }, [])

  return (
    <div>
      <ul>
        {
           shoppingItems && shoppingItems.map((product) => ( 
            <div key={product.product.product._id}>
              {/* <SetQuantityButton product={product.product.product} /> */}
              {/* <SetShoppingCartQuantityButton product={product.product.product} /> */}
              <ShoppingCartItem product={product}/>
            </div>
          ))
          
        }
          <div>Total: { sum } </div>
          <button onClick={() => removeAllItems()}>Hejdå alla</button>
        </ul>
    </div>
  )
}

export default ShoppingCartList