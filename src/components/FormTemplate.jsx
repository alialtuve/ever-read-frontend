
const FormTemplate = ({ type, name, defaultValue, labelText, onChange }) => {
  return (
    <div className="form-template">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input 
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue || ''}
        className="form-input"
        onChange={onChange}
        required
      />
    </div>
  )
}

export default FormTemplate
