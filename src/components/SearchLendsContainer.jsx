import { useLendsContext } from '../pages/LendedBooks';
import { Form, useNavigate, useSubmit } from "react-router-dom";
import Wrapper from "../assets/wrappers/DashboardFormWrapper";
import FormTemplate from "./FormTemplate";

const SearchLends = () => {
  const navigate = useNavigate();
  const { searchValues } = useLendsContext();
  const { title, user } = searchValues;

  const cleanFields = () => {
    navigate('/dashboard/lended-books')
  }

  const submit = useSubmit();

  const debounce = (onChange) => {
    let timeout;
    return(e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form)
      }, 2000)
    }
  }
  
  return (
    <Wrapper>
      <Form className="form">
      <h4>Search By</h4>
        <div className="form-center">
          <FormTemplate
            type='search'
            name='title'
            defaulValue={title} 
            onChange={debounce((form) => {
              submit(form)
            })}
          />
          <FormTemplate
            type='search'
            name='user'
            defaultValue={user}
            onChange={debounce((form) => {
              submit(form)
            })}
          />   
          <div className='form-row'>
            <button 
              type='reset'
              className="btn btn-edit btn-block form-btn" 
              onClick={cleanFields}
              >
                Clean Search Values
            </button>
          </div>
        </div>
      </Form>
    </Wrapper>
  )
}

export default SearchLends