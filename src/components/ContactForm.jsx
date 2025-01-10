import { useState, useRef } from "react"

function ContactForm() {

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [message, setMessage] = useState('')

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData(data => {
            return {
                ...data,
                [e.target.id]: e.target.value
            }
        })
    }

    // const nameRef = useRef(null)
    // const emailRef = useRef(null)
    // const messageRef = useRef(null)

    const [formErrors, setformErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!validate()) return

        // const feedback = {
        //     name: nameRef.current.value,
        //     email: emailRef.current.value,
        //     message: messageRef.current.value
        // }
        // console.log(feedback)

        // nameRef.current.value = ''
        // emailRef.current.value = ''
        // messageRef.current.value = ''

        console.log(formData)

        formData.name = ''
        formData.email = ''
        formData.message = ''
    }

    const validate = () => {

        const errors = {}

        if(formData.name.trim() === '') {
            errors.name = 'Please enter a name'
        }
        else if (formData.name.trim().length < 2){
            errors.name = 'Please enter a name that is at least 2 characters long'
        }

        if(formData.email.trim() === '') {
            errors.email = 'Please enter a valid email address'
        }

        if(formData.message.trim() === '') {
            errors.message = 'Please enter a message'
        }

        setformErrors(errors)

        return Object.keys(errors).length <= 0
    }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Your name</label>
                <input value={formData.name} onChange={handleChange} type="text" id="name" />
                {/* <input ref={nameRef} type="text" id="name" /> */}
                {formErrors.name && <p>{formErrors.name}</p>}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input value={formData.email} onChange={handleChange} type="email" id="email" />
                {/* <input ref={emailRef} type="text" id="email" /> */}
                {formErrors.email && <p>{formErrors.email}</p>}
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <input value={formData.message} onChange={handleChange} type="text" id="message" />
                {/* <input ref={messageRef} type="text" id="message" /> */}
                {formErrors.message && <p>{formErrors.message}</p>}
            </div>
            <button>Submit</button>
        </form>
    </>
  )
}
export default ContactForm