import { useEffect, useReducer, useState } from "react"
import useQuantityChange from "../hooks/useQuantityChange"
import { useShoppingCartContext } from "../contexts/ShoppingCartContext"

// Set quantity of products (to add to shopping cart) component
function SetQuantityButton( product ) {

  // Import states and functions from Shopping Cart context
  const { addShoppingListItem } = useShoppingCartContext()
  const { calculateSum } = useShoppingCartContext()
  const { calculateQuantity } = useShoppingCartContext()
  const { initialState2 } = useShoppingCartContext()

  // Import useQuantityChange-hook to change and set the product quantity
  const {
    increaseProductQuantity,
    decreaseProductQuantity,
    quantity,
    setQuantity
  } = useQuantityChange()

  // State to check and update if an item has been added
  const [itemAdded, setItemAdded] = useState()
  // Reducer to change the initialState2 when the user adds a product to the shopping list
  const [state, dispatch] = useReducer(reducer2, initialState2);

  function reducer2(state, action) {
    // If the 'increaseQuantity'-action is called, increase the itemAdded and initialState2's productQuantity with +1
    if (action.type === 'increaseQuantity') {

      setItemAdded(state.productQuantity + 1)

      return {
        productQuantity: state.productQuantity + 1
      }
    }
    throw Error('Unknown action occured');
  }

  // Add the product and its quantity to the shopping cart
  // Then, reset the quantity (=the amount of products the user wants to add to the shopping cart) to 1 again
  const addToCart = () => {
    addShoppingListItem(product, quantity)
    setQuantity(1)
  }

  // Calculate the total quantity and total sum if the itemAdded-state has been updated 
  // (=an item and/or its quantity has increased)
  useEffect(() => {
    calculateQuantity()
    calculateSum()

  }, [itemAdded])

  return (
    // Three buttons:
    // - and + buttons that set the amount/quantity of items that the user wants to add to their shopping cart
    // A button that adds the product and the amount to the shopping cart 
    <div className='flex justify-items-center items-center gap-3'>
        <button className='cursor-pointer hover:bg-indigo-400 hover:text-white border-1 border-solid rounded-md border-slate-400 px-4 py-2' onClick={() => decreaseProductQuantity()}>-</button>
        <p>{ quantity }</p>
        <button className='cursor-pointer hover:bg-indigo-400 hover:text-white border-1 border-solid rounded-md border-slate-400 px-4 py-2' onClick={() => increaseProductQuantity()}>+</button>
        <button className='cursor-pointer hover:bg-indigo-400 hover:text-white border-1 border-solid rounded-md border-slate-400 px-4 py-2' onClick={() => {dispatch({ type: 'increaseQuantity' }); addToCart()}}>Add to cart</button>
    </div>
  )
}
export default SetQuantityButton