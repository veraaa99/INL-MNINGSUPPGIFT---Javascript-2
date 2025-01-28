import { useState, useRef } from "react"

function LoginForm() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [formErrors, setformErrors] = useState({})

  const handleChange = (e) => {
    setFormData(data => {
        return {
            ...data,
            [e.target.id]: e.target.value
        }
    })
  }
  
  const handleSubmit = (e) => {
      e.preventDefault()
      if(!validate()) return
      console.log(formData)

      formData.email = ''
      formData.password = ''
  }

  const validate = () => {
    const errors = {}

    if(formData.email.trim() === '') {
        errors.email = 'Please enter a valid email address'
    }

    if(formData.password.trim() === '') {
        errors.password = 'Please enter a password'
    }

    setformErrors(errors)

    return Object.keys(errors).length <= 0
}

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input value={formData.email} onChange={handleChange} type="email" id="email" />
                {formErrors.email && <p>{formErrors.email}</p>}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input value={formData.password} onChange={handleChange} type="text" id="password" />
                {formErrors.password && <p>{formErrors.password}</p>}
            </div>
            <button>Login</button>
        </form>
    </>
  )
}
export default LoginForm