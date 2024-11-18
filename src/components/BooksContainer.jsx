import Book from './Book';
import { useAllBooksContext } from "../pages/AllBooks";
import Wrapper from '../assets/wrappers/BookContainerWrapper';

const BooksContainer = () => {
  const {books} = useAllBooksContext();
  if(books.length === 0) {
    return (
      <Wrapper>
        <h2>
          No books to display ...
        </h2>
      </Wrapper>
    )
  }
  return(
    <Wrapper>
      <div className='books'> 
        {
          books.map((book) => {
            return <Book key={book._id} {...book} />
          })
        }
      </div>
    </Wrapper>
  )
}

export default BooksContainer;
