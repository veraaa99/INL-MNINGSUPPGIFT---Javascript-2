import { useState, useRef } from "react"

function RegisterForm() {

  // const [firstName, setFirstName] = useState('')
  // const [surname, setSurname] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')

  // const firstNameRef = useRef(null)
  // const surnameRef = useRef(null)
  // const emailRef = useRef(null)
  // const passwordRef = useRef(null)
  // const confirmPasswordRef = useRef(null)

  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: ''
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

      formData.firstName = '',
      formData.surname = '',
      formData.email = '',
      formData.password = '',
      formData.confirmPassword = ''

      // const user = {
      //     firstName: firstNameRef.current.value,
      //     surname: surnameRef.current.value,
      //     email: emailRef.current.value,
      //     password: passwordRef.current.value,
      //     confirmPassword: confirmPasswordRef.current.value
      // }
      // console.log(user)

      // firstNameRef.current.value = ''
      // surnameRef.current.value = ''
      // emailRef.current.value = ''
      // passwordRef.current.value = ''
      // confirmPasswordRef.current.value = ''
  }

  const validate = () => {

    const errors = {}

    if(formData.firstName.trim() === '') {
        errors.firstName = 'Please enter a name'
    }
    else if (formData.firstName.trim().length < 2){
        errors.firstName = 'Please enter a name that is at least 2 characters long'
    }

    if(formData.surname.trim() === '') {
      errors.surname = 'Please enter a name'
    }
    else if (formData.surname.trim().length < 2){
        errors.surname = 'Please enter a name that is at least 2 characters long'
    }

    if(formData.email.trim() === '') {
        errors.email = 'Please enter a valid email address'
    }

    if(formData.password.trim() === '') {
        errors.password = 'Please enter a password'
    }
    else if (formData.password.trim().length < 5){
      errors.password = 'Please enter a password that is at least 5 characters long'
    }

    if(formData.confirmPassword.trim() !== formData.password.trim()) {
      errors.confirmPassword = 'Please enter your password again'
  }

    setformErrors(errors)

    return Object.keys(errors).length <= 0
}

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First name</label>
                <input value={formData.firstName} onChange={handleChange} type="text" id="firstName" />
                {/* <input ref={firstNameRef} type="text" id="firstName" /> */}
                {formErrors.firstName && <p>{formErrors.firstName}</p>}

            </div>
            <div>
                <label htmlFor="surname">Surname</label>
                <input value={formData.surname} onChange={handleChange} type="text" id="surname" />
                {/* <input ref={surnameRef} type="text" id="surname" /> */}
                {formErrors.surname && <p>{formErrors.surname}</p>}

            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input value={formData.email} onChange={handleChange} type="email" id="email" />
                {/* <input ref={emailRef} type="email" id="email" /> */}
                {formErrors.email && <p>{formErrors.email}</p>}

            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input value={formData.password} onChange={handleChange} type="text" id="password" />
                {/* <input ref={passwordRef} type="text" id="password" /> */}
                {formErrors.password && <p>{formErrors.password}</p>}

            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm password</label>
                <input value={formData.confirmPassword} onChange={handleChange} type="text" id="confirmPassword" />
                {/* <input ref={confirmPasswordRef} type="text" id="confirmPassword" /> */}
                {formErrors.confirmPassword && <p>{formErrors.confirmPassword}</p>}

            </div>
            <button>Create account</button>
        </form>
    </>
  )
}
export default RegisterForm