
function FormInput({ className, errorMsg, label, name, id, ...rest }) {
  return (
    <div className={`form-group ${className}`}>
        <label htmlFor={id}>{ label }</label>
        <input className="form-input" id={id} name={name} {...rest}/>
        {errorMsg && <p className="invalid-input">{errorMsg}</p>}
        {/* <p className="invalid-input">error message</p> */}
    </div>
  )
}
export default FormInput