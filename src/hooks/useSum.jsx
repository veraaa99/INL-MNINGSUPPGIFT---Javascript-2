import { useState } from "react"
import { useShoppingCartContext } from "../contexts/ShoppingCartContext"

function useSum() {

    const { shoppingItems } = useShoppingCartContext()

    const [sum, setSum] = useState(0)

    const newSum = shoppingItems.reduce((a,v) =>  a = a + v.product.product.price , 0 )

    const getSum = () => {
        setSum(newSum)
        return sum
    }

  return (
    sum,
    setSum,
    newSum,
    getSum
  )
}
export default useSum