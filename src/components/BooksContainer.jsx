import Book from './Book';
import { useAllBooksContext } from "../pages/AllBooks";
import Wrapper from '../assets/wrappers/BookContainerWrapper';
import PaginationContainer from './PaginationContainer';
import { useOutletContext } from 'react-router-dom';

const BooksContainer = () => {
  const {data} = useAllBooksContext();
  
  const { user } = useOutletContext();
  const {books, total, numOfPages, currentPage} = data;
  const userId = user._id;    

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
            return <Book key={book._id} {...book} user={userId}/>
          })
        }
      </div>
      { numOfPages > 1 && <PaginationContainer numOfPages={numOfPages} currentPage={currentPage} /> }
    </Wrapper>
  )
}

export default BooksContainer;
