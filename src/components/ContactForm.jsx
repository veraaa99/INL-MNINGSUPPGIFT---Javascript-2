import { useState, useRef } from "react"

function ContactForm() {

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [message, setMessage] = useState('')

    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: ''
    // })

    // const handleChange = (e) => {
    //     setFormData(data => {
    //         return {
    //             ...data,
    //             [e.target.id]: e.target.value
    //         }
    //     })
    // }

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const messageRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        const feedback = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value
        }
        console.log(feedback)

        nameRef.current.value = ''
        emailRef.current.value = ''
        messageRef.current.value = ''
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Your name</label>
                {/* <input value={formData.name} onChange={handleChange} type="text" id="name" /> */}
                <input ref={nameRef} type="text" id="name" />

            </div>
            <div>
                <label htmlFor="email">Email</label>
                {/* <input value={formData.email} onChange={handleChange} type="email" id="email" /> */}
                <input ref={emailRef} type="text" id="name" />

            </div>
            <div>
                <label htmlFor="message">Message</label>
                {/* <input value={formData.message} onChange={handleChange} type="text" id="message" /> */}
                <input ref={messageRef} type="text" id="name" />

            </div>
            <button>Submit</button>
        </form>
    </>
  )
}
export default ContactForm