import Wrapper from '../assets/wrappers/LandingWraper';
import {Logo} from '../components/Logo';
import landing from '../assets/images/landing.svg';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1> Live <span>your </span> reading </h1>
          <p>
            Come to the world of knowledge. Immerse yourself in the search for fantasy, 
            wisdom and imagination. You will find everything you need... you will find your self.
            Just dare and enjoy. Wherever you are, wherever you go.
            Register or login if you already are.
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn'>
            Login
          </Link>
        </div>
        <img src={landing} alt='books' className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
