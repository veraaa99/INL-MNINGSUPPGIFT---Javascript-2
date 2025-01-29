import { useMessageContext } from "../contexts/MessageContext"
import useForm from "../hooks/useForm"
import FormInput from "./FormInput"

function ContactForm() {

    const { form, errors, handleChange, handleSubmit } = useForm({
        name: '',
        email: '',
        message: ''
    })

    const { isMessageSubmitted } = useMessageContext()
    const { sendMessage } = useMessageContext()

    const onSubmit = (e) => {
        handleSubmit(e, async (values) => {
            sendMessage(values)
        })
    }

  return (
    <div className='w-100' >
        <h2 className='text-4xl my-6'>Contact us:</h2>
        <form onSubmit={onSubmit}>
            <div className='flex flex-col'>
                <FormInput label="Name" name="name" id="name" type="text" value={form.name} onChange={handleChange} errorMsg={errors.name}/>
                <FormInput label="Email" name="email" id="email" type="email" value={form.email} onChange={handleChange} errorMsg={errors.email} />
                <FormInput label="Message" name="message" id="message" type="text" value={form.message} onChange={handleChange} errorMsg={errors.message}/>

            </div>
            <button className='p-2 px-5 border-1 border-solid rounded-md mt-7'>Submit</button>
        </form>
        { isMessageSubmitted && <p>Message succesfully submitted!</p>}
    </div>
  )
}
export default ContactForm