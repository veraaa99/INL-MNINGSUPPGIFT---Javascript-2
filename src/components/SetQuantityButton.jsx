import { useState } from "react"
import useQuantityChange from "../hooks/useQuantityChange"
import { useShoppingCartContext } from "../contexts/ShoppingCartContext"
import useSum from "../hooks/useSum"

function SetQuantityButton( product ) {

const { productQuantity } = useShoppingCartContext()
const { setProductQuantity } = useShoppingCartContext()
const { addShoppingListItem } = useShoppingCartContext()

const {
    increaseProductQuantity,
    decreaseProductQuantity,
    quantity,
    setQuantity,
    sum,
    setSum,
    getSum
} = useQuantityChange()

  return (
    <div>
        <button onClick={decreaseProductQuantity}>-</button>
        <p>{ quantity }</p>
        <button onClick={increaseProductQuantity}>+</button>
        <button onClick={() => addShoppingListItem(product, quantity)}>Add to cart</button>
    </div>
  )
}
export default SetQuantityButton