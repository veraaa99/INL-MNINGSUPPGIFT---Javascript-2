import { useContext, useEffect } from "react"
import { useOrderContext } from "../contexts/OrderContext"
import ShoppingCartList from "../components/ShoppingCartList";
import { ShoppingCartContext, useShoppingCartContext } from "../contexts/ShoppingCartContext";
import SetQuantityButton from "../components/SetQuantityButton";
import { useMessageContext } from "../contexts/MessageContext";
import useForm from "../hooks/useForm";
import FormInput from "../components/FormInput";

function Checkout() {

  const { placeOrder } = useOrderContext()
  const { shoppingItems } = useShoppingCartContext()
  const { sendMessage } = useMessageContext()
  
  const { form, errors, handleChange, handleSubmit } = useForm({
    name: '',
    email: '',
    message: ''
  })

  const onSubmit = (e) => {
    e.preventDefault()
    placeOrder(shoppingItems)

    handleSubmit(e, async (values) => {
      sendMessage(values)
    })
  }

  return (
    <>
      <div>
      <ShoppingCartList />

        <form onSubmit={onSubmit}>

        <FormInput label="Name" name="name" id="name" type="text" value={form.name} onChange={handleChange} errorMsg={errors.name}/>
        <FormInput label="Email" name="email" id="email" type="email" value={form.email} onChange={handleChange} errorMsg={errors.email} />
        <FormInput label="Message" name="message" id="message" type="text" value={form.message} onChange={handleChange} errorMsg={errors.message}/>
          <button type="submit">Place order</button>
        </form>
      </div>
    </>
  )
}
export default Checkout