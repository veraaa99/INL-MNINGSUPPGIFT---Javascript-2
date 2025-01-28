import { Link } from "react-router"
import { useProductContext } from "../contexts/ProductContext"
import { useEffect } from "react"
import SetQuantityButton from "../components/SetQuantityButton"

function Products() {

  const { products } = useProductContext()
  const { getProducts } = useProductContext()

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
                  <SetQuantityButton product={product} />
              </div>
            ))
          }
        </ul>
      </div>
  )

}
export default Products