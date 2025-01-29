import { useEffect, useReducer, useState } from "react"
import { useShoppingCartContext } from "../contexts/ShoppingCartContext"

function ShoppingCartItem( { product } ) {
  
    // const { shoppingItems } = useShoppingCartContext()
    const { calculateSum } = useShoppingCartContext()
    const { removeShoppingListItem } = useShoppingCartContext()
    const { initialState } = useShoppingCartContext()
    const { calculateQuantity } = useShoppingCartContext()

    const [itemState, setItemState] = useState()

    useEffect(() => {
      if(product.quantity === 0) {
        removeShoppingListItem(product.product.product._id)
      }
      calculateSum()
      calculateQuantity()

    }, [itemState])

    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state, action) {
      if (action.type === 'incremented_quantity') {

        product.quantity++
        setItemState(product.quantity)

        return {
          productQuantity: state.productQuantity + 1
        }
      } else if (action.type === 'reduced_quantity') {

        product.quantity--
        setItemState(product.quantity)
    
        return {
          productQuantity: state.productQuantity - 1
        }
      }
      throw Error('Unknown action.');
    }
  
    return (
      <>
      <div className='grid grid-cols-2'>
        <div>
          <li>{product.product.product.name}</li>
          <li> x { product.quantity} st</li>
          <li className='mb-4'>{product.product.product.price} kr/st </li>
          <button className='border-1 border-solid rounded-md px-3 py-1 pb-2 mr-3 text-center' onClick={() => dispatch({ type: 'incremented_quantity' })}>+</button>
          <button className='border-1 border-solid rounded-md px-3.5 py-1 pb-2 text-center' onClick={() => dispatch({ type: 'reduced_quantity' })}>-</button>
        </div>
        <div>
          <img className='object-cover rounded-lg' src={product.product.product.images[0]}></img>
        </div>
      </div>
        
      </>
    )
}

export default ShoppingCartItem