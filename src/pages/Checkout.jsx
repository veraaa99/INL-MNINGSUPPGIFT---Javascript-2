import ShoppingCartList from "../components/ShoppingCartList";
import OrderForm from "../components/OrderForm";

function Checkout() {

  return (
    <>
      <div className='px-30 grid m-auto my-30 center-items'>
        <h1 className='text-5xl justify-self-center pb-10'>Checkout</h1>
        <ShoppingCartList />
        <OrderForm />
      </div>
    </>
  )
}
export default Checkout