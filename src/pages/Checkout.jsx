import { useContext, useEffect } from "react"
import { useOrderContext } from "../contexts/OrderContext"
import ShoppingCartList from "../components/ShoppingCartList";
import { ShoppingCartContext, useShoppingCartContext } from "../contexts/ShoppingCartContext";
import SetQuantityButton from "../components/SetQuantityButton";

function Checkout() {

  return (
    <div>
       <ShoppingCartList />
    </div>
  )
}
export default Checkout