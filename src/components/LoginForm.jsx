import { useState, useRef } from "react"

function LoginForm() {

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  
  const handleSubmit = (e) => {
      e.preventDefault()

      const user = {
          email: emailRef.current.value,
          password: passwordRef.current.value
      }
      console.log(user)

      emailRef.current.value = ''
      passwordRef.current.value = ''
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
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
            <button>Login</button>
        </form>
    </>
  )
}
export default LoginForm