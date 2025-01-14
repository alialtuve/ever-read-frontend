import { Form, useSubmit, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Wrapper from "../assets/wrappers/DashboardFormWrapper";
import FormSelect from "./FormSelect";
import FormTemplate from "./FormTemplate";
import  urlFetch from '../utils/urlFetch';
import { useAllBooksContext } from '../pages/AllBooks';

const SearchBookContainer = () => {
  
  const navigate = useNavigate();
  const {searchValues}  = useAllBooksContext();
  const { writer, title } = searchValues;
  const [authors, setAuthors] = useState([]);  
   
  
  useEffect(()=> {
    const getAuthors = async() => {
      try {
        const { data } = await urlFetch.get('/author');
        const authors = data.authors; 
        setAuthors([{_id:'00', name:'All'}, ...authors]);
      } catch (error) {
        console.log(error);
      }
    }
    getAuthors();
  },[]);

  const cleanFields = () => {
    navigate('/dashboard')
  }

  const submit = useSubmit();

  const debounce = (onChange) =>{
    let timeout;
    return (e) => {
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
        <h4 className="form-title"> search by</h4>
        <div className="form-center">
          <FormTemplate 
            type='search'
            name='title'
            defaulValue={title}
            onChange={debounce((form) =>{
              submit(form)
            })}
          />
          <FormSelect
            labelText='author'
            name='writer'
            list={authors}
            defaultValue={writer}
            onChange={(e)=>{
              submit(e.currentTarget.form)
            }}
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

export default SearchBookContainer;
