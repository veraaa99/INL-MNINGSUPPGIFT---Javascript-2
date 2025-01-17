import { Link } from "react-router"
import { useProductContext } from "../contexts/ProductContext"
import { useEffect } from "react"

function Products() {

  const { products } = useProductContext()
  const { setProducts } = useProductContext()
  const { getProducts } = useProductContext()

  useEffect(() => {
    getProducts()
    }, [])

  return (
    <div>
      <ul>
        {
          products.map((product) => (
            <li key={product._id}><Link to={`/Products/${product._id}`}>{product.name}</Link></li>
          ))
        }
      </ul>
    </div>
  )

}
export default Products