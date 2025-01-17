import { useEffect } from "react"
import { useOrderContext } from "../contexts/OrderContext"

function Checkout() {

  const { orders } = useOrderContext()

  useEffect(() => {
    console.log(orders);
}, [orders]);

  return (
    <div>
      <ul>
        {
          orders.map((order) => (
            <p key={order.order._id}>{order.order._id}</p>
          ))
        }
      </ul>
    </div>
  )
}
export default Checkout