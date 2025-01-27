import { useEffect, useReducer, useState } from "react"
import useQuantityChange from "../hooks/useQuantityChange"
import { useShoppingCartContext } from "../contexts/ShoppingCartContext"
import useSum from "../hooks/useSum"

function SetQuantityButton( product ) {

// const { productQuantity } = useShoppingCartContext()
// const { setProductQuantity } = useShoppingCartContext()
const { addShoppingListItem } = useShoppingCartContext()
const { calculateSum } = useShoppingCartContext()
const { calculateQuantity } = useShoppingCartContext()
const { shoppingItems } = useShoppingCartContext()

const { initialState2 } = useShoppingCartContext()
const [state3, setState3] = useState()

const {
    increaseProductQuantity,
    decreaseProductQuantity,
    quantity,
    setQuantity,
    productQuantity, 
    setProductQuantity,
    sum,
    setSum,
    getSum,
} = useQuantityChange()

  const [state, dispatch] = useReducer(reducer2, initialState2);

  function reducer2(state, action) {
    if (action.type === 'incremented_quantity') {

      console.log(product.quantity)
      console.log(shoppingItems)

      setState3(state.productQuantity + 1)
      console.log(state3)

      return {
        productQuantity: state.productQuantity + 1
      }
    }
    throw Error('Unknown action.');
  }

  useEffect(() => {
    calculateQuantity()
    calculateSum()

  }, [state3])

  const addToCart = () => {
    addShoppingListItem(product, quantity)

  }

  return (
    <div>
        <button onClick={() => decreaseProductQuantity()}>-</button>
        <p>{ quantity }</p>
        <button onClick={() => increaseProductQuantity()}>+</button>
        <button onClick={() => {dispatch({ type: 'incremented_quantity' }); addToCart()}}>Add to cart</button>
    </div>
  )
}
export default SetQuantityButton