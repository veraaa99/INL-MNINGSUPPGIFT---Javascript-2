import MessageContextProvider from "./MessageContext"
import OrderContextProvider from "./OrderContext"
import ProductContextProvider from "./ProductContext"

const Providers = ({ children }) => {
    return (
        <MessageContextProvider>
            <OrderContextProvider>
                <ProductContextProvider>
                    { children }
                </ProductContextProvider>
            </OrderContextProvider>
        </MessageContextProvider>
    )
}
export default Providers