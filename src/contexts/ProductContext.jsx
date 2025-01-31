import { createContext, useContext, useState } from "react";

export const ProductContext = createContext()

// Product context 
function ProductContextProvider({ children }) {

  // States to set and update the total amount of products, their images,
  // one specific product and its ID
  const [products, setProducts] = useState([])
  const [imgSrc, setImgSrc] = useState([])
  const [product, setProduct] = useState({})
  let [productId, setProductId] = useState('')

  // Get all products by fetching them from the API
  // Set all products to the products state 
  const getProducts = async () => {
    try {
      const res = await fetch('https://js2-ecommerce-api.vercel.app/api/products')
      const data = await res.json()
      setProducts(data)
      return true
    }
    catch(error) {console.log(error.message)}
  }

  // Values to be passed from the Product Context
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

  // Product context provider to share values with children (=components using the Product context)
  return (
      <ProductContext.Provider value={value}>
          { children }
      </ProductContext.Provider>
  )
}

export default ProductContextProvider

// Custom hook with useContext-hook, to let children access the context
// If the hook isn't called inside the Product Context Provider, throw error
export const useProductContext = () => {
    const context = useContext(ProductContext)

    if(!context) throw new Error('useProductContext must be called inside a ProductContextProvider')

    return context
}