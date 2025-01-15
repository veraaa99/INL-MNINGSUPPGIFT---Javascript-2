import { useState } from "react"
import { validate } from "../utils/validate"

function useForm( formData ) {

  const [form, setForm] = useState({...formData})
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const{name, value} = e.target

    setForm(data =>({
        ...data,
        [name]: value
    }))
  }


  const handleSubmit = (e, cb) => {
    e.preventDefault()

    if(!validate(form, setErrors)) {

        return
    }

    cb(form)
  }

  return {
    form,
    errors,
    handleChange,
    handleSubmit
  }
}
export default useForm