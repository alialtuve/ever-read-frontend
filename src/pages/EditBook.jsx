import { FormTemplate, FormSelect } from '../components';
import { useEffect, useState } from 'react';
import { Form, redirect, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/DashboardFormWrapper';
import  urlFetch from '../utils/urlFetch';
import { toast } from 'react-toastify';

export const loader = async({ params }) => {
  try {
    const {data} = await urlFetch.get(`/book/${params.id}`);   
    return data;
  } catch(error) {
    toast.error(error?.response?.data?.msg);
    return redirect('/dashboard');
  }
}

export const action = async({request, params}) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    await urlFetch.patch(`/book/${params.id}`, data);
    toast.success('Book updated succesfully')
    return redirect('/dashboard')
  } catch(error){
    toast.error(error?.response?.data?.msg)
    return error
  }
}

const EditBook = () => {
  const { book } = useLoaderData();
  const { genre, author } = book;
  const isSaving = navigation.state === 'saving';
  
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
        const { data } = await urlFetch.get('/genre');
        const genres = data.genres;
        setGenres(genres);
      } catch (error) {
        console.log(error);
      }
    }
    getAuthors()
    getGenres()
  },[]);

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title"> edit Book </h4>
        <div className="form-center">
          <FormTemplate type="text" name="title" defaultValue={book.title} />
          <FormSelect
            name='author'
            labelText='author'
            defaultValue={author.name}
            list={authors}
          />
          <FormTemplate
            type="text"
            name="pusblished"
            defaultValue={book.published}
          />
          <FormTemplate
            type='number'
            id='stock'
            name='stock'
            defaultValue={book.stock}
          />
          <FormSelect
            name='genre'
            labelText='genre'
            defaultValue={genre.name}
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
  );
}

export default EditBook
