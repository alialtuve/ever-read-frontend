import { redirect } from "react-router-dom"
import urlFetch from "../utils/urlFetch"
import { toast } from 'react-toastify';

export const action = async ({params}) => {
  
  try {
    await urlFetch.patch(`/lend/${params.id}`);
    toast.success('Book returned succesfully');
  } catch (error) {
    toast.error(error?.response?.data?.msg)
  }
  return redirect('/dashboard/lended-books')
}
