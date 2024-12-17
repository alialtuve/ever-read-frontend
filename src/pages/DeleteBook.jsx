import { redirect } from "react-router-dom"
import urlFetch from "../utils/urlFetch"
import { toast } from 'react-toastify';

export const action = async ({params}) => {
  try {
    await urlFetch.delete(`/book/${params.id}`);
    toast.success('Book deleted succesfully');
  } catch (error) {
    toast.error(error?.response?.data?.msg)
  }
  return redirect('/dashboard')
}
