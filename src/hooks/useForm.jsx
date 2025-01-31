import { useState } from "react"
import { validate } from "../utils/validate"
import { useMessageContext } from "../contexts/MessageContext"

// useForm custom hook
function useForm( formData ) {

  // States to set and update recieved form data & errors,
  // Imported state from Message context
  const [form, setForm] = useState({...formData})
  const [errors, setErrors] = useState({})
  const { setIsMessageSubmitted } = useMessageContext()

  // When input field is changes (=when the user interacts with the input field),
  // set the input data and values to the form state.
  // Set the IsMessageSubmitted state to false
  const handleChange = (e) => {
    const{name, value} = e.target

    setForm(data =>({
        ...data,
        [name]: value
    }))

    setIsMessageSubmitted(false)

  }

  // When form is submitted, return if any errors occures (in the validate util)
  // Otherwise, set the formData to the form state, and callback the form state
  const handleSubmit = (e, cb) => {
    e.preventDefault()

    if(!validate(form, setErrors)) {
        return
    }

    setForm(formData)
    cb(form)
  }

  // States and functions to be accessed when using the useForm hook
  return {
    form,
    errors,
    handleChange,
    handleSubmit,
    setForm
  }
}
export default useForm