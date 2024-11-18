import { useLoaderData } from 'react-router-dom';
import  urlFetch from '../utils/urlFetch';
import { toast } from 'react-toastify';
import { BooksContainer, SearchContainer } from '../components';
import { useContext, createContext} from 'react';

export const loader = async() => {
  try {
    const {data} = await urlFetch.get('/book');
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
}

const AllBooksContext = createContext();

const AllBooks = () => {
  const {books} = useLoaderData();
  
  return (
     <AllBooksContext.Provider value={{ books }}>
         <SearchContainer />
         <BooksContainer />
     </AllBooksContext.Provider>
  )
}

export const useAllBooksContext = () => useContext(AllBooksContext);

export default AllBooks
