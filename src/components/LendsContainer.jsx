import { useLendsContext } from '../pages/LendedBooks';
import Wrapper from '../assets/wrappers/LendsWrapper';
import Lends from './Lends';

const LendsContainer = () => {

  const {lend} = useLendsContext();

  if(lend.length === 0){
    return (
      <Wrapper>
        <h2> No Lends to display </h2>
      </Wrapper>
    )
  }
  
  return (
    <Wrapper>
      <h4 style={{marginTop: '25px', marginBottom:'25px'}}> Lended Books</h4>
      <header>
        <p>title</p>
        <p>author</p>
        <p>reader</p>
        <p>email</p>
        <p>date</p>
        <p style={{width:'100px'}}>action</p>
      </header>
      <div className='lends'>
        {lend.map((lend)=>{
             return < Lends key={lend._id} lend={lend} />
          })}
      </div>
    </Wrapper>
  )
}

export default LendsContainer