import {Form} from 'react-router-dom';
import Wrapper from '../assets/wrappers/LendsWrapper';
import { FaBookReader } from "react-icons/fa";

function Lends({lend}) {
  
  const { book, user, _id, createdAt} = lend;
  const { author } = book;
  const date = new Date(createdAt).toUTCString().slice(0,17);

  return (
    <Wrapper>
          <div className='content'>
            <span className='info'> {book.title} </span>
            <span className='info'> {author.name}  </span>
            <span className='info'> {`${user.name} ${user.lastName}`} </span>
            <span className='info hide'> {user.email} </span>
            <span className='info hide'> {date} </span>
            <span className='info' style={{width:'125px'}}> 
              <Form method='post' action={`../return-book/${_id}`}>
                <button className='btn btn-edit'>
                  <FaBookReader className='icon'/>
                  return
                </button>  
              </Form>
            </span>
          </div>
    </Wrapper>
  )
}

export default Lends