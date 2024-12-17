import { useEffect, useState } from 'react';
import { useOutletContext, Form, useNavigation, redirect } from 'react-router-dom';
import Wrapper from '../assets/wrappers/DashboardFormWrapper';
import { FormTemplate, FormSelect } from '../components';
import  urlFetch from '../utils/urlFetch';
import { toast } from 'react-toastify';

export const action = async({ request }) => {
  const formData = await request.formData();
  const data =  Object.fromEntries(formData);
  try {
    await urlFetch.post('/book', data);
    toast.success('New Book added successfully');
    return redirect('/dashboard');
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddBook = () => {
 const [authors, setAuthors] = useState([]);
 const [genres, setGenres] = useState([]);

  useEffect(()=> {
    const getAuthors = async() => {
      try {
        const { data } = await urlFetch.get('/author');
        const authors = data.authors;
        setAuthors(authors);
      } catch (error) {
        console.log(error);
      }
    }

    const getGenres = async() => {
      try {
        const {data} = await urlFetch.get('/genre');
        const genres = data.genres;
        setGenres(genres);
      } catch (error) {
        console.log(error);
      }
    }
    getGenres();
    getAuthors();
  },[]);

  const { user } = useOutletContext();
  const navigation = useNavigation();
  const isSaving = navigation.state === 'saving';

  return (
    <Wrapper>
        <Form method='post' className='form'>
          <h4 className='form-title'> add book</h4>
          <div className='form-center'>
            <FormTemplate 
              type='text' 
              name='title' 
              id='title' 
            />
            <FormSelect 
              name='author'
              list={authors}
            />
            <FormTemplate 
              type='text'
              name='published'
              id='published'
            />
            <FormTemplate
               type='number'
               name='stock'
               id='stock'
             />
            <FormSelect 
              name='genre'
              list={genres}
            />
            <div className='form-row'>
            <button 
              type='submit' 
              className='btn btn-save btn-block form-btn' 
              disabled={isSaving}
            > 
              {isSaving? 'Saving...' : 'Save'}
            </button>
            </div>
          </div>
        </Form>
    </Wrapper>
  )
}

export default AddBook
