import useQuantityChange from "../hooks/useQuantityChange"
import { useShoppingCartContext } from "../contexts/ShoppingCartContext"

function SetShoppingCartQuantityButton( product ) {

const { addShoppingListItem } = useShoppingCartContext()

const {
    increaseProductQuantity,
    quantity
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