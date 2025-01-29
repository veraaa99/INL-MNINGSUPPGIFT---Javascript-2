import { useEffect, useReducer, useState } from "react"
import useQuantityChange from "../hooks/useQuantityChange"
import { useShoppingCartContext } from "../contexts/ShoppingCartContext"

function SetQuantityButton( product ) {

  const { addShoppingListItem } = useShoppingCartContext()
  const { calculateSum } = useShoppingCartContext()
  const { calculateQuantity } = useShoppingCartContext()

  const { initialState2 } = useShoppingCartContext()
  const [itemAdded, setItemAdded] = useState()

  const [state, dispatch] = useReducer(reducer2, initialState2);

  const {
      increaseProductQuantity,
      decreaseProductQuantity,
      quantity,
      setQuantity
  } = useQuantityChange()

  function reducer2(state, action) {
    if (action.type === 'incremented_quantity') {

      setItemAdded(state.productQuantity + 1)

      return {
        productQuantity: state.productQuantity + 1
      }
    }
    throw Error('Unknown action.');
  }

  useEffect(() => {
    calculateQuantity()
    calculateSum()

  }, [itemAdded])

  const addToCart = () => {
    addShoppingListItem(product, quantity)
    setQuantity(1)
  }

  return (
    <div className='flex justify-items-center items-center gap-3'>
        <button className='border-1 border-solid rounded-md px-4 py-2' onClick={() => decreaseProductQuantity()}>-</button>
        <p>{ quantity }</p>
        <button className='border-1 border-solid rounded-md px-4 py-2' onClick={() => increaseProductQuantity()}>+</button>
        <button className='border-1 border-solid rounded-md px-4 py-2' onClick={() => {dispatch({ type: 'incremented_quantity' }); addToCart()}}>Add to cart</button>
    </div>
  )
}
export default SetQuantityButton