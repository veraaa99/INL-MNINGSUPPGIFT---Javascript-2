import { useState, useRef } from "react"

function RegisterForm() {

  // const [firstName, setFirstName] = useState('')
  // const [surname, setSurname] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')

  const firstNameRef = useRef(null)
  const surnameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const confirmPasswordRef = useRef(null)
  
  const handleSubmit = (e) => {
      e.preventDefault()

      const user = {
          firstName: firstNameRef.current.value,
          surname: surnameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
          confirmPassword: confirmPasswordRef.current.value
      }
      console.log(user)

      firstNameRef.current.value = ''
      surnameRef.current.value = ''
      emailRef.current.value = ''
      passwordRef.current.value = ''
      confirmPasswordRef.current.value = ''
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First name</label>
                {/* <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" id="firstName" /> */}
                <input ref={firstNameRef} type="text" id="firstName" />
            </div>
            <div>
                <label htmlFor="surname">Surname</label>
                {/* <input value={surname} onChange={(e) => setSurname(e.target.value)} type="text" id="surname" /> */}
                <input ref={surnameRef} type="text" id="surname" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                {/* <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" /> */}
                <input ref={emailRef} type="email" id="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                {/* <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" id="password" /> */}
                <input ref={passwordRef} type="text" id="password" />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm password</label>
                {/* <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="text" id="confirmPassword" /> */}
                <input ref={confirmPasswordRef} type="text" id="confirmPassword" />
            </div>
            <button>Create account</button>
        </form>
    </>
  )
}
export default RegisterForm