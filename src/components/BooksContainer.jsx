import Book from './Book';
import { useAllBooksContext } from "../pages/AllBooks";
import Wrapper from '../assets/wrappers/BookContainerWrapper';
import PaginationContainer from './PaginationContainer';

const BooksContainer = () => {
  const {data} = useAllBooksContext();
  const {books, total, numOfPages} = data;

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
      <h4 style={{marginBottom: '25px'}}> {total} book{books.length > 1 && 's'} found </h4>
      <div className='books'> 
        {
          books.map((book) => {
            return <Book key={book._id} {...book} />
          })
        }
      </div>
      { numOfPages > 1 && <PaginationContainer /> }
    </Wrapper>
  )
}

export default BooksContainer;
