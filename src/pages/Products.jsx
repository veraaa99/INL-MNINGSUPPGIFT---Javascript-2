import { Link, NavLink } from "react-router"
import { useProductContext } from "../contexts/ProductContext"
import { useEffect } from "react"
import { useOrderContext } from "../contexts/OrderContext"
import { useShoppingCartContext } from "../contexts/ShoppingCartContext"
import SetQuantityButton from "../components/SetQuantityButton"
import useQuantityChange from "../hooks/useQuantityChange"
import ShoppingCartList from "../components/ShoppingCartList"

function Products() {

  const { products } = useProductContext()
  const { setProducts } = useProductContext()
  const { getProducts } = useProductContext()

  const { saveOrder } = useOrderContext()
  const { addOrder } = useOrderContext()
  const { productQuantity } = useShoppingCartContext()
  const { setProductQuantity } = useShoppingCartContext()

  const { addShoppingListItem } = useShoppingCartContext()
  const { shoppingItems } = useShoppingCartContext()
  const { getShoppingList } = useShoppingCartContext()
  const { sum } = useShoppingCartContext()

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
    <div>
       <ShoppingCartList />
       { shoppingItems.length > 0 && <button><NavLink to="/Checkout">Checkout</NavLink></button> }
    </div>
      <div>
        <ul>
          {
            products.map((product) => (
              <div key={product._id}>
                <li><Link to={`/Products/${product._id}`}>{product.name}</Link></li>
                  <SetQuantityButton product={product} />
              </div>
            ))
          }
        </ul>
      </div>
    </>
  )

}
export default Products