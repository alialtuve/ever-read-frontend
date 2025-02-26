import styled from 'styled-components';

const Wrapper = styled.div`
    @media screen and (min-width: 450px) and (max-width: 770px ) {
      grid-template-columns: auto 1fr;
      .hide {
        overflow: hidden;
        display: none;
      }
    }
  header {
    background-color: var(--background-color-02);
    color: var(--text-color-04);
    padding: 0.5rem 0.5rem;
    border: 1px solid var(--background-color-03);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);
    display: flex;
    text-transform: capitalize;
    align-items: center;
    max-width: 1500px;
    font-weight: 500;
    margin-bottom: 20px;
    p {
      width: 20%;
      margin-right: 25px;
    }
  }
  .lends {
    display: inline;
    grid-template-columns: 1fr;
    row-gap: 1rem;
    max-width: 1500px;
    
  }
    
  
  .content {
    border: 1px solid var(--background-color-03);
    padding: 0.5rem 0.5rem;
    margin-top: 0.75rem;
    background: var(--background-color-02);
    border-radius: var(--border-radius);
    display: flex;
    box-shadow: var(--shadow-2);
    height: 40px;
    width: 100%;
    align-items: center;
  }
  
  .info {
    width: 25%;
    margin: 10px;
    letter-spacing: 0.25px;
    color: var(--text-color-01);
    font-size: 0.85rem;
  }

  .actions {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
  }
  
  .btn-edit {
    height: 30px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
  }
  .btn-edit{
    margin-right: 1.05rem;
  }
  .icon {
    margin-right: 0.5rem;
  }
  .main-icon {
    width: 25px;
    height: 35px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--border-radius);
    color: var(--text-color-04);
    margin-right: 1rem;
  }
  `;

export default Wrapper;
