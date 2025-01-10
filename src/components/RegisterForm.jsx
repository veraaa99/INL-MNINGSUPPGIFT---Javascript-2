function RegisterForm() {

  const [firstName, setFirstName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <>
        <form>
            <div>
                <label htmlFor="firstName">First name</label>
                <input type="text" id="firstName" />
            </div>
            <div>
                <label htmlFor="surname">Surname</label>
                <input type="text" id="surname" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm password</label>
                <input type="text" id="confirmPassword" />
            </div>
            <button>Create account</button>
        </form>
    </>
  )
}
export default RegisterForm