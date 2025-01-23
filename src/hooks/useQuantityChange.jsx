import { useState } from "react"
import { useShoppingCartContext } from "../contexts/ShoppingCartContext"

function useQuantityChange () {

    const [quantity, setQuantity] = useState(1)
    const { sum } = useShoppingCartContext()
    const { setSum } = useShoppingCartContext()

    const { shoppingItems } = useShoppingCartContext()
    const { productQuantity } = useShoppingCartContext()
    const { setProductQuantity } = useShoppingCartContext()

    const increaseProductQuantity = ( e ) => {
        setProductQuantity(productQuantity + 1)
        setQuantity(quantity + 1)

        // const newSum = shoppingItems.reduce((a,v) =>  a = a + v.product.product.price , 0 )
        // setSum(newSum)

        return quantity, productQuantity
    }

    const decreaseProductQuantity = ( e ) => {
        setProductQuantity(productQuantity - 1)
        setQuantity(quantity - 1)

        // const newSum = shoppingItems.reduce((a,v) =>  a = a - v.product.product.price , 0 )
        // setSum(newSum)

        return productQuantity, quantity
    }

    const getSum = () => {
        return sum
    }

   return {
    increaseProductQuantity,
    decreaseProductQuantity,
    quantity,
    setQuantity,
    sum,
    setSum,
    getSum
  }
  
}

export default useQuantityChange