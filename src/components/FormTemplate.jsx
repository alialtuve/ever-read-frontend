
const FormTemplate = ({ type, name, labelText, defaultValue }) => {
  return (
    <div className="form-template">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input 
        type={type}
        id={name}
        className="form-input"
        defaultValue={defaultValue || ''}
        required
      />
    </div>
  )
}

export default FormTemplate