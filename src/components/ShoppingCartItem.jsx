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
        <li>{product.product.product.name} x { product.quantity} st</li>
        <li>{product.product.product.price} kr/st </li>
        <button onClick={() => dispatch({ type: 'incremented_quantity' })}>Hej</button>
        <button onClick={() => dispatch({ type: 'reduced_quantity' })}>Hejdå</button>
      </>
    )
}

export default ShoppingCartItem