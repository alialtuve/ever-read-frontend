import { useLoaderData } from 'react-router-dom';
import  urlFetch from '../utils/urlFetch';
import { toast } from 'react-toastify';
import { createContext, useContext } from 'react';
import { LendsContainer }  from '../components'

export const loader = async() => {
  try {
    const {data} = await urlFetch.get('/lend');
    return data
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
}
const AllLendsContext = createContext();

const LendedBooks = () => {

  const {lend} = useLoaderData();

  return (
    <AllLendsContext.Provider value={{ lend }}>
      <LendsContainer/>
    </AllLendsContext.Provider>
  )
}

export const useLendsContext = () => useContext(AllLendsContext);

export default LendedBooks