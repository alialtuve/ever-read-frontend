import styled from 'styled-components';

const Wrapper = styled.div`
  background: var(--background-color-02);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);
  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--background-color-03);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
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

  .info {
    h5 {
      margin-bottom: 0.5rem;
      font-size: larger;
      font-weight: bolder;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      letter-spacing: var(--letter-spacing);
      color: var(--text-color-01);
    }
  }

  .content {
    padding: 0.5rem 0.5rem;
    margin-left: 0.5rem;
  }

  .content-center {
    display: grid;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    grid-template-columns: 1fr;
    row-gap: 1rem;
    align-items: center;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  .actions {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
  }
  .btn-edit,
  .btn-delete {
    height: 30px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
  }
  .btn-edit {
    margin-right: 1.5rem;
  }
  .icon {
    margin-right: 0.5rem;
  }
`;

export default Wrapper;
