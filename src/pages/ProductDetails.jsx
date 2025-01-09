import { useEffect, useState } from "react"
import { useParams } from "react-router"

function ProductDetails() {

    const { productId } = useParams()

    const [product, setProduct] = useState({})

    useEffect(() => {
        const getProduct = async() => {
            const res = await fetch('https://js2-ecommerce-api.vercel.app/api/products/' + productId)
            const data = await res.json()
            setProduct(data)
        }
        getProduct()
    }, [])

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Id:{product._id}</p>
      <p>{product.description}</p>
    </div>
  )
}
export default ProductDetails