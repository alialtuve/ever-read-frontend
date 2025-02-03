import { redirect, useOutletContext } from "react-router-dom"
import urlFetch from "../utils/urlFetch"
import { toast } from 'react-toastify';

export const action = async ({params}) => {
  
  try {
    await urlFetch.post (`/lend`, params);
    toast.success('Operation registered succesfully');
  } catch (error) {
    toast.error(error?.response?.data?.msg)
  }
  return redirect('/dashboard')
}