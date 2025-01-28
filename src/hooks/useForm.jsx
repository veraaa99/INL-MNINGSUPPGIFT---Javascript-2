import { useState } from "react"
import { validate } from "../utils/validate"
import { useMessageContext } from "../contexts/MessageContext"

function useForm( formData ) {

  const [form, setForm] = useState({...formData})
  const [errors, setErrors] = useState({})
  const { setIsMessageSubmitted } = useMessageContext()

  const handleChange = (e) => {
    const{name, value} = e.target

    setForm(data =>({
        ...data,
        [name]: value
    }))

    setIsMessageSubmitted(false)

  }

  const handleSubmit = (e, cb) => {
    e.preventDefault()

    if(!validate(form, setErrors)) {
        return
    }

    setForm(formData)
    cb(form)
  }

  return {
    form,
    errors,
    handleChange,
    handleSubmit,
    setForm
  }
}
export default useForm