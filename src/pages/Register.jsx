import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterLoginWrapper";
import { LogoForm, FormTemplate} from '../components';

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <LogoForm />
        <h2> Register </h2>
        <FormTemplate 
          type='text'
          name='name'
        />
        <FormTemplate 
          type='email'
          name='email'
        />
        <FormTemplate 
          type='password'
          name='password'
        />
        <button type="submit" className="btn btn-block">
          Sign up
        </button>
        <p>
          Already a member?
          <Link to='/login' className="login-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register
