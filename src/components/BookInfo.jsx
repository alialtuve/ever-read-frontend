import styled from 'styled-components';

const BookInfo = ({ name, text }) => {
  return (
    <Wrapper>
         <span className="book-text"><b>{name}:</b></span>
         <span className='book-text'>{text}</span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
display: flex;
align-items: center;
margin-right: 1rem;
.book-text {
  text-transform: capitalize;
  font-size: 1rem;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
}
`;

export default BookInfo