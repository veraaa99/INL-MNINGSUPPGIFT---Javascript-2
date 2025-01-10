import { useEffect, useState } from "react"
import { Link } from "react-router"

function Products() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch('https://js2-ecommerce-api.vercel.app/api/products')
      const data = await res.json()
      setProducts(data)
    }
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