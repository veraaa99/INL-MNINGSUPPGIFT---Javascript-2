import { createContext, useContext, useState } from "react";

export const ProductContext = createContext()

function ProductContextProvider({ children }) {

  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})
  const [imgSrc, setImgSrc] = useState('')
  let [productId, setProductId] = useState('')

  const getProducts = async () => {
    try {
      const res = await fetch('https://js2-ecommerce-api.vercel.app/api/products')
      const data = await res.json()
      setProducts(data)
      return true
    }
    catch(err) {console.log('error')}
  }

  const value = {
    products,
    setProducts,
    getProducts,
    product,
    setProduct,
    imgSrc,
    setImgSrc,
    productId,
    setProductId
  }

    return (
        <ProductContext.Provider value={value}>
            { children }
        </ProductContext.Provider>
    )
}

export default ProductContextProvider

export const useProductContext = () => {
    const context = useContext(ProductContext)

    if(!context) throw new Error('useProductContext must be called inside a ProductContextProvider')

    return context
}