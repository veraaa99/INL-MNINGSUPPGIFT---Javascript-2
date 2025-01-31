import { useState } from "react"
import { useShoppingCartContext } from "../contexts/ShoppingCartContext"

// useQuantityChange hook (for SetQuantityButton component)
function useQuantityChange () {

    // State to set and update the amount of items that the user wants to add to their shopping cart
    // Imported state from Shopping cart context
    const [quantity, setQuantity] = useState(1)
    const { sum } = useShoppingCartContext()

    // Set the quantity state to (quantity + 1)
    const increaseProductQuantity = ( e ) => {
        setQuantity(quantity + 1)
        return quantity
    }

    // If the quantity state is 1, return (=the user can't choose an amount of items lower than 1)
    // Otherwise, set the quantity state to (quantity - 1)
    const decreaseProductQuantity = ( e ) => {
        if(quantity === 1){
            return 
        }

        setQuantity(quantity - 1)
        return quantity
    }

    // States and functions to be accessed when using the useForm hook
   return {
    increaseProductQuantity,
    decreaseProductQuantity,
    quantity,
    setQuantity,
    sum
  }
}

export default useQuantityChange