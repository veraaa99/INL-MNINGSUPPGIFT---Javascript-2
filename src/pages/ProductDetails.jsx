import { useEffect, useState } from "react"
import { useParams } from "react-router"

function ProductDetails() {

    const { productId } = useParams()

    const [product, setProduct] = useState({})
    const [imgSrc, setImgSrc] = useState('')

    useEffect(() => {
        const getProduct = async() => {
            const res = await fetch('https://js2-ecommerce-api.vercel.app/api/products/' + productId)
            const data = await res.json()
            setProduct(data)
            setImgSrc(data.images)
        }
        getProduct()
    }, [])

  return (
    <div>
      <div>
        {<img src={imgSrc[0]}></img>}
        {<img src={imgSrc[1]}></img>}
        {<img src={imgSrc[2]}></img>}
        {<img src={imgSrc[3]}></img>}
      </div>
      <div>
        <h1>{product.name}</h1>
        <p>Price: {product.price} kr</p>
        <p>{product.description}</p>
      </div>
    </div>
  )
}
export default ProductDetails