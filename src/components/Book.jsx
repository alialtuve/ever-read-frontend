import { Form, Link  } from "react-router-dom";
import Wrapper from "../assets/wrappers/BookWrapper";
import { FaBook, FaEdit, FaTrash, FaBookOpen } from "react-icons/fa";
import BookInfo from "./BookInfo";


const Book = ({ _id, title, published, stock, author, genre, borrowed, user }) => {

  const availability = stock - (borrowed?  borrowed: 0); // remove borrowed validation because model has changed to default value 0
  
  return (
    <Wrapper>
      <header>
        <FaBook className="main-icon"/>
        <div className="info">
          <h5> {title}</h5>
            <p>{author.name}</p>
            <p style={{ textAlign:'right', fontWeight:'bolder', color:availability? '#d8c309':'#c72609'}}> 
                  { !availability ? 'Not Available!'  : `Available : ${availability}` } 
            </p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
            <BookInfo  name='Genre' text={genre.name}/>
            <BookInfo  name='Published' text={published}/>
            <BookInfo  name='Stock' text={stock}/>
          <footer className="actions">
            <Form method="post" action={`/dashboard/get-book/${_id}/${user}`}>
              <button type="submit"  className="btn btn-getBook" >
                <FaBookOpen className="icon" />
                  Get
              </button>
            </Form>
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
