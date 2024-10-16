import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterLoginWrapper';
import { LogoForm, FormTemplate} from '../components';

const Login = () => {
  return (
    <Wrapper>
      <form className='form'>
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
        <button type='submit' className='btn btn-block'>
          Login
        </button>

        <button type='button' className='btn btn-block'>
           Explore the App
        </button>
        <p>
          
          <Link to='/register' className='login-btn'>
            Register now
          </Link>
        </p>
      </form>
    </Wrapper>
  )
}

export default Login