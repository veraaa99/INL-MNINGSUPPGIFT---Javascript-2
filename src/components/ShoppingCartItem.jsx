import { useEffect, useReducer, useState } from "react"
import { useShoppingCartContext } from "../contexts/ShoppingCartContext"

// Shopping cart item component
function ShoppingCartItem( { product } ) {
  
  // Import states and functions from Shopping Cart context
  const { calculateSum } = useShoppingCartContext()
  const { removeShoppingListItem } = useShoppingCartContext()
  const { calculateQuantity } = useShoppingCartContext()
  const { initialState } = useShoppingCartContext()

  // State to check and update if an item has been added or removed
  const [itemState, setItemState] = useState()
  // Reducer to change the initialState2 when the user adds a product to the shopping list
  const [state, dispatch] = useReducer(reducer, initialState);


  function reducer(state, action) {
    // If the 'increaseQuantity'-action is called, increase the itemState and initialState's productQuantity with +1
    // Also increase the product's (=the Shopping cart item's props) quantity with +1
    if (action.type === 'increaseQuantity') {

      product.quantity++
      setItemState(product.quantity)

      return {
        productQuantity: state.productQuantity + 1
      }
    // If the 'decreaseQuantity'-action is called, decrease the itemState and initialState's productQuantity with -1
    // Also decrease the product's quantity with -1
    } else if (action.type === 'decreaseQuantity') {

      product.quantity--
      setItemState(product.quantity)
  
      return {
        productQuantity: state.productQuantity - 1
      }
    }
    throw Error('Unknown action occured');
  }

  // If the product's quantity is set to 0, remove the product from the shopping cart
  // Calculate the total quantity and total sum if the itemState-state has been updated 
  // (=an item and/or its quantity has increased)
  useEffect(() => {
    if(product.quantity === 0) {
      removeShoppingListItem(product.product.product._id)
    }
    calculateSum()
    calculateQuantity()

  }, [itemState])

  return (
    // An item in the shopping cart:
    // Shows the product's name, amount of items added, price and an image
    // - and + buttons that set the amount/quantity of items that the user wants to add or remove from their shopping cart
    <div className='grid grid-cols-2'>
      <div>
        <li>{product.product.product.name}</li>
        <li> x { product.quantity} st</li>
        <li className='mb-4'>{product.product.product.price} kr/st </li>
        <button className='cursor-pointer hover:bg-indigo-400 hover:text-white border-1 border-solid rounded-md border-slate-400 px-3.5 py-1 pb-2 mr-3 text-center' onClick={() => dispatch({ type: 'decreaseQuantity' })}>-</button>
        <button className='cursor-pointer hover:bg-indigo-400 hover:text-white border-1 border-solid rounded-md border-slate-400 px-3 py-1 pb-2 text-center' onClick={() => dispatch({ type: 'increaseQuantity' })}>+</button>
      </div>
      <div>
        <img className='object-cover rounded-lg' src={product.product.product.images[0]}></img>
      </div>
    </div>
  )
}

export default ShoppingCartItem