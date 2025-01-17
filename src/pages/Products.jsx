import { Link } from "react-router"
import { useProductContext } from "../contexts/ProductContext"
import { useEffect } from "react"
import { useOrderContext } from "../contexts/OrderContext"

function Products() {

  const { products } = useProductContext()
  const { setProducts } = useProductContext()
  const { getProducts } = useProductContext()

  const { saveOrder } = useOrderContext()
  const { addOrder } = useOrderContext()

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <ul>
        {
          products.map((product) => (
            <div key={product._id}>
               <li><Link to={`/Products/${product._id}`}>{product.name}</Link></li>
                <button>-</button>
                <p></p>
                <button>+</button>
               <button onClick={() => saveOrder(product._id)}>Add to cart</button>
            </div>
          ))
        }
      </ul>
    </div>
  )

}
export default Products