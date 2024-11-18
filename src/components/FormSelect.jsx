
const FormSelect = ({ name, labelText, list, defaultValue='' }) => {
  return(
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name }
      </label>
      <select 
        name={name}
        id={name}
        className='form-select'
        defaultValue={defaultValue || ''}
        >
          {
            list.map((item)=> {
              return (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              )
            })
          }
      </select>
  </div>
  )
}

export default FormSelect