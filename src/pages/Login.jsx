import { Link, Form, redirect, useNavigation } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterLoginWrapper';
import { LogoForm, FormTemplate} from '../components';
import  urlFetch from '../utils/urlFetch';
import { toast } from 'react-toastify';

export const action = async({request}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
   try{
    await urlFetch.post('/auth/login', data);
    toast.success('Login successfull');
    return redirect('/dashboard');
   }catch (error){
      toast.error(error?.response?.data?.msg);
     return error;
   }
}

const Login = () => {
  const navigation = useNavigation();
  const isLogginIn = navigation.state === 'loggingin';

  return (
    <Wrapper>
      <Form method='post' className='form'>
        <LogoForm />
        <h2> Login </h2>
        <FormTemplate
          type='text'
          name='email'
        />
        <FormTemplate
          type='password'
          name='password'
        />
        <button type='submit' className='btn btn-block' disabled={isLogginIn}>
          {isLogginIn? 'logging in...' : 'login'}
        </button>
        <p>
          <Link to='/register' className='login-btn'>
            Register now
          </Link>
        </p>
      </Form>
    </Wrapper>
  )
}

export default Login