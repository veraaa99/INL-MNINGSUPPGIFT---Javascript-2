import useForm from "../hooks/useForm"
import FormInput from "./FormInput"

function ContactForm() {

    const { form, errors, handleChange, handleSubmit } = useForm({
        name: '',
        email: '',
        message: ''
    })

    const onSubmit = (e) => {
        handleSubmit(e, async (values) => {

            const newMessage = {
                name: values.name,
                email: values.email,
                message: values.message
            }

            try {
                let response = await fetch('https://js2-ecommerce-api.vercel.app/api/messages', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(newMessage)
                })
                const data = await response.json()
                console.log(data) 

            } catch (error) {
                console.error(error.message)
            }

        })
    }

  return (
    <form onSubmit={onSubmit}>
        <FormInput label="Name" name="name" id="name" type="text" value={form.name} onChange={handleChange} errorMsg={errors.name}/>
        <FormInput label="Email" name="email" id="email" type="email" value={form.email} onChange={handleChange} errorMsg={errors.email} />
        <FormInput label="Message" name="message" id="message" type="text" value={form.message} onChange={handleChange} errorMsg={errors.message}/>

        <button>Submit</button>
    </form>
  )
}
export default ContactForm