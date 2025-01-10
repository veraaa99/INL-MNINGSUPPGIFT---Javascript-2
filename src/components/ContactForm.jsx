function ContactForm() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

  return (
    <>
        <form>
            <div>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <input type="text" id="message" />
            </div>
            <button>Submit</button>
        </form>
    </>
  )
}
export default ContactForm