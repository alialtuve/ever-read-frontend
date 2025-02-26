import { useLoaderData } from 'react-router-dom';
import  urlFetch from '../utils/urlFetch';
import { toast } from 'react-toastify';
import { createContext, useContext } from 'react';
import { LendsContainer, SearchLendsContainer }  from '../components'

export const loader = async({request}) => {

  const params = Object.fromEntries([
    ...new URL (request.url).searchParams.entries()
  ])

  try {
    const {data} = await urlFetch.get('/lend', {params});  
    return {data, searchValues:{...params}}
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
}
const AllLendsContext = createContext();

const LendedBooks = () => {

  const { data, searchValues } = useLoaderData();
  
  return (
    <AllLendsContext.Provider value={{ data, searchValues }}>
      <SearchLendsContainer />
      <LendsContainer/>
    </AllLendsContext.Provider>
  )
}

export const useLendsContext = () => useContext(AllLendsContext);

export default LendedBooks