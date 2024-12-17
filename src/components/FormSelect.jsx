
const FormSelect = ({ name, labelText, list, defaultValue='', onChange }) => {
  
  return(
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name }
      </label>
      <select
        id={name}
        name={name}
        className='form-select'
        defaultValue={ defaultValue }
        onChange={onChange}
        required
        >
          {
            list.map((item)=> {
              return (
                <option 
                  key={item._id} 
                  value={item._id} 
                  selected={(item.name === defaultValue)? true : false}
                >
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
