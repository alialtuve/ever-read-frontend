import { FaAngleDoubleRight, FaAngleDoubleLeft} from 'react-icons/fa';
import Wrapper from '../assets/wrappers/PaginationWrapper';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAllBooksContext } from '../pages/AllBooks';

function PaginationContainer() {
  const {
    data: {numOfPages, currentPage},
  } = useAllBooksContext();
  
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        className={`btn page-btn ${activeClass && 'active'}`}
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    pageButtons.push(
      addPageButton({ pageNumber: 1, activeClass: currentPage === 1 })
    );

    if (currentPage > 3) {
      pageButtons.push(
        <span className='page-btn dots' key='dots-1'>
          ...
        </span>
      );
    }
    
    if (currentPage !== 1 && currentPage !== 2) {
      pageButtons.push(
        addPageButton({ pageNumber: currentPage - 1, activeClass: false })
      );
    }
    
    if (currentPage !== 1 && currentPage !== numOfPages) {
      pageButtons.push(
        addPageButton({ pageNumber: currentPage, activeClass: true })
      );
    }
  
    if (currentPage !== numOfPages && currentPage !== numOfPages - 1) {
      pageButtons.push(
        addPageButton({ pageNumber: currentPage + 1, activeClass: false })
      );
    }

    if (currentPage < numOfPages - 2) {
      pageButtons.push(
        <span className=' page-btn dots' key='dots+1'>
          ...
        </span>
      );
    }

    pageButtons.push(
      addPageButton({
        pageNumber: numOfPages,
        activeClass: currentPage === numOfPages,
      })
    );

    return pageButtons;
  };

  return (
    <Wrapper>
      <button
        className='btn prev-btn'
        onClick={() => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) prevPage = numOfPages;
          handlePageChange(prevPage);
        }}
      >
        
        <FaAngleDoubleLeft />
        prev
      </button>
      <div className='btn-container'>{renderPageButtons()}</div>
      <button
        className='btn next-btn'
        onClick={() => {
          let nextPage = currentPage + 1;
          if (nextPage > numOfPages) nextPage = 1;
          handlePageChange(nextPage);
        }}
      >
        next
        <FaAngleDoubleRight />
      </button>
    </Wrapper>
  );
  
}

export default PaginationContainer