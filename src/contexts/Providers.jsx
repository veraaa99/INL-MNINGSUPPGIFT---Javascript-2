import MessageContextProvider from "./MessageContext"
import OrderContextProvider from "./OrderContext"
import ProductContextProvider from "./ProductContext"
import ShoppingCartContextProvider from "./ShoppingCartContext"

const Providers = ({ children }) => {
    return (
        <OrderContextProvider>
            <ShoppingCartContextProvider>
                <MessageContextProvider>
                        <ProductContextProvider>
                            { children }
                        </ProductContextProvider>
                </MessageContextProvider>
            </ShoppingCartContextProvider>
        </OrderContextProvider>
    )
}
export default Providers