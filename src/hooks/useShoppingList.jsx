import { useState } from "react"

function useShoppingList( shoppingData ) {

    const [shoppingList, setShoppingList] = useState({...shoppingData})


   return {
    shoppingList,
    errors,
    handleChange,
    handleSubmit
  }
  
}

export default useShoppingList