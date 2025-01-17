import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { ProductContext, useProductContext } from "../contexts/ProductContext"

function ProductDetails() {

    const { productId } = useParams()

    const { product } = useProductContext()
    const { setProduct } = useProductContext()
    const { setProductId } = useProductContext()
    const { getProduct } = useProductContext()
    const { imgSrc } = useProductContext()
    const { setImgSrc } = useProductContext()

    useEffect(() => {
      setProductId(productId)
      const getProduct = async() => {
        try {
          const res = await fetch(`https://js2-ecommerce-api.vercel.app/api/products/${productId}`)
          const data = await res.json()
          setProduct(data)
          setImgSrc(data.images)
    
        } catch(err) {console.log('error')}
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