import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <nav> navbar </nav>
      <Outlet />
    </div>
  )
}

export default Home
