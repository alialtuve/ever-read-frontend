import styled from 'styled-components';

const Wrapper = styled.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  .btn-container {
    background: var(--register-dark);
    border-radius: var(--border-radius);
    display: flex;
  }
  .page-btn {
    background: transparent;
    border-color: transparent;
    width: 50px;
    height: 40px;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--cancel-light);
    border-radius: var(--border-radius);
    cursor:pointer;
  }
  .active{
    background:var(--register-light);
        color: var(--text-color-01);

  }
  .prev-btn,.next-btn{
    background: var(--register-dark);
    border-color: transparent;
        border-radius: var(--border-radius);

    width: 100px;
    height: 40px;
        color: (--text-color-01);
text-transform:capitalize;
letter-spacing:var(--letter-spacing);
display:flex;
align-items:center;
justify-content:center;
gap:0.5rem;
cursor:pointer;
  }
  .prev-btn:hover,.next-btn:hover{
    background:var(--register-light);
        color: var(--text-color-01);
        transition:var(--transition);
  }
.dots{
  display:grid;
  place-items:center;
  cursor:text;
}
`;
export default Wrapper;
