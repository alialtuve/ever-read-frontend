import styled  from "styled-components";

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;

  .logo {
    display: block;
    margin: 0 auto;
    width: 300px;
    height: 100px; 
    object-fit: cover;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var( --register-dark);
    border-bottom: 5px solid var( --register-dark) ;
  }

  h2 {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  p {
    margin-top: 1.38rem;
    text-align: center;
    line-height: 1.5;
  }

  .btn {
    margin-top:  1rem;
    height: 35px;
  }

  .login-btn {
    color: var(--register-dark);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.3rem;
  }

`;

export default Wrapper;