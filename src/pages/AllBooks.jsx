import { useLoaderData } from 'react-router-dom';
import  urlFetch from '../utils/urlFetch';
import { toast } from 'react-toastify';
import { BooksContainer, SearchContainer } from '../components';
import { useContext, createContext} from 'react';

export const loader = async({ request }) => {

  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ])

  
  try {
    const {data} = await urlFetch.get('/book', { params});
    return {data, searchValues: {...params}};
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
}

const AllBooksContext = createContext();

const AllBooks = () => {
  
  const {data, searchValues} = useLoaderData();
  const {books} = data;
  
  return (
     <AllBooksContext.Provider value={{ books, searchValues }}>
         <SearchContainer />
         <BooksContainer />
     </AllBooksContext.Provider>
  )
}

export const useAllBooksContext = () => useContext(AllBooksContext);

export default AllBooks
