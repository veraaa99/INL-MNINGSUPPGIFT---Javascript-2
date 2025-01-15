import useForm from "../hooks/useForm"
import FormInput from "./FormInput"

function Form() {

    const { form, errors, handleChange, handleSubmit } = useForm({
        name: '',
        email: '',
        message: ''
    })

    const onSubmit = (e) => {
        handleSubmit(e, async (values) => {
            console.log(values)
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
export default Form