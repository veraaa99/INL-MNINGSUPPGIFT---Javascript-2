// Forminput component
function FormInput({ className, errorMsg, label, name, id, ...rest }) {
  // Label, input field and error message 
  return (
    <div className={`form-group ${className} grid py-3`}>
        <label className='py-2' htmlFor={id}>{ label }</label>
        <input className="w-200 form-input border rounded-sm border-gray-500 p-1" id={id} name={name} {...rest}/>
        {errorMsg && <p className="invalid-input my-3">{errorMsg}</p>}
    </div>
  )
}
export default FormInput