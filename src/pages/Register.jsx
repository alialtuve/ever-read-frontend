import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterLoginWrapper";
import { Logo, FormTemplate} from '../components';

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h3> Register Page </h3>
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
      </form>
    </Wrapper>
  )
}

export default Register
