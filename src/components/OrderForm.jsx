import { useMessageContext } from "../contexts/MessageContext"
import { useOrderContext } from "../contexts/OrderContext"
import { useShoppingCartContext } from "../contexts/ShoppingCartContext"
import useForm from "../hooks/useForm"
import FormInput from "./FormInput"

function OrderForm() {

    const { placeOrder } = useOrderContext()
    const { shoppingItems } = useShoppingCartContext()
    const { removeAllItems} = useShoppingCartContext()
    const { totalQuantity } = useShoppingCartContext()
    const { sendMessage } = useMessageContext()
    const { isMessageSubmitted } = useMessageContext()
    
    const { form, errors, handleChange, handleSubmit } = useForm({
      name: '',
      email: '',
      message: ''
    })
  
    const onSubmit = (e) => {
      e.preventDefault()
  
      handleSubmit(e, async (values) => {
        sendMessage(values)
        placeOrder(shoppingItems)
        removeAllItems()
      })
    }

  return (
    <> 
        { (!isMessageSubmitted) && (totalQuantity !== 0) 
        ?
          <div>
          <form onSubmit={onSubmit}>
          <h2 className='text-2xl my-6'>Contact information:</h2>
              <div className='flex flex-col'>
                  <FormInput label="Name" name="name" id="name" type="text" value={form.name} onChange={handleChange} errorMsg={errors.name}/>
                  <FormInput label="Email" name="email" id="email" type="email" value={form.email} onChange={handleChange} errorMsg={errors.email} />
                  <FormInput label="Message" name="message" id="message" type="text" value={form.message} onChange={handleChange} errorMsg={errors.message}/>
                  <button className='p-2 px-5 border-1 border-solid rounded-md mt-7 self-center' type="submit">Place order</button>
              </div>
            </form>
            </div>
        :
        <div>Your cart is empty</div>
        }
        { isMessageSubmitted && <p>Order successfully placed!</p>}
    </>
  )
}
export default OrderForm