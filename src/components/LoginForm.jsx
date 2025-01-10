function LoginForm() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
        <form>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" />
            </div>
            <button>Login</button>
        </form>
    </>
  )
}
export default LoginForm