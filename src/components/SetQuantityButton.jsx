import { useState } from "react"
import useQuantityChange from "../hooks/useQuantityChange"
import { useShoppingCartContext } from "../contexts/ShoppingCartContext"
import useSum from "../hooks/useSum"

function SetQuantityButton( product ) {

// const { productQuantity } = useShoppingCartContext()
// const { setProductQuantity } = useShoppingCartContext()
const { addShoppingListItem } = useShoppingCartContext()

const {
    increaseProductQuantity,
    decreaseProductQuantity,
    quantity,
    setQuantity,
    productQuantity, 
    setProductQuantity,
    sum,
    setSum,
    getSum
} = useQuantityChange()

const addItem = () => {
  // setProductQuantity(product.quantity)>
  addShoppingListItem(product, quantity)
}

  return (
    <div>
        <button onClick={() => decreaseProductQuantity()}>-</button>
        <p>{ quantity }</p>
        <button onClick={() => increaseProductQuantity()}>+</button>
        <button onClick={() => addItem()}>Add to cart</button>
    </div>
  )
}
export default SetQuantityButton