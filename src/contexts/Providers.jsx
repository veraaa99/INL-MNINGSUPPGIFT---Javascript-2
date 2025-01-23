import MessageContextProvider from "./MessageContext"
import OrderContextProvider from "./OrderContext"
import ProductContextProvider from "./ProductContext"
import ShoppingCartContextProvider from "./ShoppingCartContext"

const Providers = ({ children }) => {
    return (
        <ShoppingCartContextProvider>
            <MessageContextProvider>
                <OrderContextProvider>
                    <ProductContextProvider>
                        { children }
                    </ProductContextProvider>
                </OrderContextProvider>
            </MessageContextProvider>
        </ShoppingCartContextProvider>
    )
}
export default Providers