import { Link, Form, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterLoginWrapper";
import { LogoForm, FormTemplate} from '../components';
import  urlFetch from '../utils/urlFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try{
    await urlFetch.post('/auth/register', data);
    toast.success('Data saved successfully');
    return redirect('/login');

  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
}

const Register = () => {
  const navigation = useNavigation();
  const isSending = navigation.state === 'Signing up';
  return (
    <Wrapper>
      <Form method='post' className="form">
        <LogoForm />
        <h2> Register </h2>
        <FormTemplate 
          type='text'
          name='name'
        />
        <FormTemplate 
          type='text'
          name='lastName'
          labelText='last name'
        />
        <FormTemplate 
          type='email'
          name='email'
        />
        <FormTemplate 
          type='password'
          name='password'
        />
        <button type="submit" className="btn btn-block" disabled={isSending} >
          {isSending? 'Signing up...' : 'Sign up'}
        </button>
        <p>
          Already a member?
          <Link to='/login' className="login-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  )
}

export default Register
