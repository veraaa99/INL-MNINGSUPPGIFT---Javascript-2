import { useState } from "react"
import useQuantityChange from "../hooks/useQuantityChange"
import { useShoppingCartContext } from "../contexts/ShoppingCartContext"
import useSum from "../hooks/useSum"

function SetShoppingCartQuantityButton( product ) {

const { addShoppingListItem } = useShoppingCartContext()
const { removeQuantity } = useShoppingCartContext()

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

  return (
    <div>
        <button>-</button>
        <button onClick={() => increaseProductQuantity()}>+</button>
        <button onClick={() => addShoppingListItem(product, quantity)}>Add to cart</button>
    </div>
  )
}
export default SetShoppingCartQuantityButton