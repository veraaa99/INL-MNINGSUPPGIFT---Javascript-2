import { createContext, useContext } from "react";

export const ProductContext = createContext()

function ProductContextProvider({ children }) {

    return (
        <ProductContext.Provider value={''}>
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