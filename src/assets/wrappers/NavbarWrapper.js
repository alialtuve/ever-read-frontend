import styled from "styled-components";

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  background: var(--background-color-02);
  .nav-container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--text-color-04);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .logo-text {
    display: none;
  }
  .logo {
    display: block;
    align-items: center;
    width: 160px;
  }
  .btn-container {
    display: flex;
    align-items: center;
  }
  
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .nav-container {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  } 
`;

export default Wrapper;
