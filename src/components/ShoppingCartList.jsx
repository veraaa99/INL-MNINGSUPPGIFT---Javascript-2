import { useContext, useEffect } from "react"
import { ShoppingCartContext, useShoppingCartContext } from "../contexts/ShoppingCartContext"
import SetQuantityButton from "./SetQuantityButton"
import useSum from "../hooks/useSum"
import useQuantityChange from "../hooks/useQuantityChange"

function ShoppingCartList() {

  const { shoppingItems } = useShoppingCartContext()
  const { getShoppingList } = useShoppingCartContext()
  // const { sum, getSum } = useQuantityChange()
  const { sum } = useShoppingCartContext()
  const { calculateSum } = useShoppingCartContext()

  useEffect(() => {
    calculateSum()
  })

  return (
    <div>
      <ul>
          {
              shoppingItems && shoppingItems.map((product) => (
                <div key={product.product.product._id}>
                  <li>{product.product.product.name} x {product.quantity} st</li>
                  <li>{product.product.product.price} kr/st </li>
                  <SetQuantityButton product={product.product.product} />
                </div>
              ))
          }
          <div>Total: { sum } </div>
        </ul>
    </div>
  )
}

export default ShoppingCartList