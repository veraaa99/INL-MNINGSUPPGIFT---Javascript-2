import { useRef } from "react"
import { useMessageContext } from "../contexts/MessageContext"
import useForm from "../hooks/useForm"
import FormInput from "./FormInput"

function ContactForm() {

    const { form, errors, handleChange, handleSubmit, setForm } = useForm({
        name: '',
        email: '',
        message: ''
    })

    const { isMessageSubmitted } = useMessageContext()
    const { setIsMessageSubmitted } = useMessageContext()
    const { sendMessage } = useMessageContext()

    const onSubmit = (e) => {
        handleSubmit(e, async (values) => {
            sendMessage(values)
        })
    }

  return (
    <div>
        <form onSubmit={onSubmit}>
            <FormInput label="Name" name="name" id="name" type="text" value={form.name} onChange={handleChange} errorMsg={errors.name}/>
            <FormInput label="Email" name="email" id="email" type="email" value={form.email} onChange={handleChange} errorMsg={errors.email} />
            <FormInput label="Message" name="message" id="message" type="text" value={form.message} onChange={handleChange} errorMsg={errors.message}/>

            <button>Submit</button>
        </form>
        { isMessageSubmitted && <p>Message succesfully submitted!</p>}
    </div>
  )
}
export default ContactForm