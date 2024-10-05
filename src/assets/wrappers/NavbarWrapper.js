import styled from "styled-components";

const Wrapper = styled.nav`

  .logo {
    display: block;
    align-items: center;
    width: 90px;
  }
  
  @media (min-width: 50px) {
    position: sticky;
    top: 0;

  } 
`;

export default Wrapper;