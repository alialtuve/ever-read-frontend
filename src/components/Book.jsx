import { Form, Link  } from "react-router-dom";
import Wrapper from "../assets/wrappers/BookWrapper";
import { FaBook, FaEdit, FaTrash } from "react-icons/fa";
import BookInfo from "./BookInfo";

const Book = ({ _id, title, published, stock, author, genre}) => {
  
  return (
    <Wrapper>
      <header>
        <FaBook className="main-icon"/>
        <div className="info">
          <h5> {title}</h5>
            <p>{author.name}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
            <BookInfo  name='Genre' text={genre.name}/>
            <BookInfo  name='Published' text={published}/>
            <BookInfo  name='Stock' text={stock}/>
          <footer className="actions">
            <Link  to={`/dashboard/edit-book/${_id}`} className="btn btn-edit" > 
                <FaEdit className="icon" /> 
                 Edit
            </Link>
            <Form method="post" action={`/dashboard/delete-book/${_id}`}>
              <button type="submit" className="btn btn-delete">
                <FaTrash className="icon"/>
                Delete
              </button>
            </Form>
          </footer>
        </div>
      </div>
    </Wrapper>
  )
}

export default Book