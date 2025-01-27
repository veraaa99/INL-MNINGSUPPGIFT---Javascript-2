import { useCallback, useContext, useEffect, useReducer, useRef, useState } from "react"
  import { ShoppingCartContext, useShoppingCartContext } from "../contexts/ShoppingCartContext"
  import SetQuantityButton from "./SetQuantityButton"
  import useSum from "../hooks/useSum"
  import useQuantityChange from "../hooks/useQuantityChange"
  import SetShoppingCartQuantityButton from "./setShoppingCartQuantityButton"

function ShoppingCartItem( { product } ) {
  
    const { shoppingItems } = useShoppingCartContext()
    const { getShoppingList } = useShoppingCartContext()
    const { increaseShoppingCartQuantity, increaseProductQuantity, decreaseProductQuantity, productQuantity, setProductQuantity, quantity } = useQuantityChange()
    const { sum } = useShoppingCartContext()
    const { setSum } = useShoppingCartContext()
    const { calculateSum } = useShoppingCartContext()
    const { addShoppingListItem } = useShoppingCartContext()
    const { removeShoppingListItem } = useShoppingCartContext()
    const { removeAllItems } = useShoppingCartContext()
    const { initialState } = useShoppingCartContext()
    const { calculateQuantity } = useShoppingCartContext()
    const { totalQuantity } = useShoppingCartContext()

    const [state2, setState2] = useState()
    // const { addToCart } = useShoppingCartContext()

        // const markerGroupRef = useRef(null);
        // const [refAquired, setRefAquired] = useState(false)
      
        // useEffect(() => {
        //     setRefAquired(true)
        // }, []);

        // useEffect(()=> {
        //     console.log(markerGroupRef.current)
        //     console.log(refAquired)
        // }, [refAquired])
      

    // const usePrevious = value => {
    //   const ref = useRef(1);

    //   useEffect(() => {
    //     ref.current = value;
    //   });
    //   return ref.current;
    // };

    // let previousUserCount = usePrevious(product.quantity -1);

    // useEffect(() => {
    //   console.log(previousUserCount)
    //   console.log(product.quantity)
    //   console.log(product)

    //   if (previousUserCount <= product.quantity) {
    //     calculateSum()
    //   } else if (previousUserCount == product.quantity) {
    //     calculateSum()
    //   }
    // }, [previousUserCount, product.quantity]);

    useEffect(() => {
      
      if(product.quantity === 0) {
        removeShoppingListItem(product.product.product._id)
      }
      calculateSum()
      calculateQuantity()

    }, [state2])

    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state, action) {
      if (action.type === 'incremented_quantity') {
        product.quantity++

        console.log(product.quantity)
        console.log(shoppingItems)

        setState2(product.quantity)
        console.log(state2)

        return {
          productQuantity: state.productQuantity + 1
        }
      } else if (action.type === 'reduced_quantity') {

        product.quantity--

        setState2(product.quantity)
        console.log(state2)

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