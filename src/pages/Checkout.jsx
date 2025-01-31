import ShoppingCartList from "../components/ShoppingCartList";
import OrderForm from "../components/OrderForm";

// Checkout page
function Checkout() {

  // Shopping cart list and order form
  return (
    <div className='px-20 grid md:mx-40 sm:mx-auto my-20 center-items'>
      <h1 className='text-5xl justify-self-center pb-20'>Checkout</h1>
      <ShoppingCartList />
      <div className="pt-20">
        <OrderForm />
      </div>
    </div>
  )
}
export default Checkout