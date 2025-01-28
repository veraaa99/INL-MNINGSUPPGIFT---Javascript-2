
function FormInput({ className, errorMsg, label, name, id, ...rest }) {
  return (
    <div className={`form-group ${className}`}>
        <label htmlFor={id}>{ label }</label>
        <input className="form-input border rounded-sm border-gray-500" id={id} name={name} {...rest}/>
        {errorMsg && <p className="invalid-input">{errorMsg}</p>}
    </div>
  )
}
export default FormInput