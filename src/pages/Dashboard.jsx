import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/DashboardWrapper';
import { Navbar, SmallSideBar, BigSideBar } from '../components';
import { createContext, useContext, useState } from 'react';
import  urlFetch from '../utils/urlFetch';
import { toast } from 'react-toastify';

export const loader = async() => {

  try {
    const {data} = await urlFetch.get('/user/current-user');
    return data;
  } catch (error) {
    return   redirect('/');  
  }
}

const DashboardContext = createContext();

const Dashboard = () => {
  const {user} = useLoaderData();
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  const logoutUser = async () => {
    navigate('/');
    await urlFetch.get('/auth/logout');
    toast.info('Logging out...');
  }

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        toggleSidebar,
        logoutUser
      }}
    >
      <Wrapper>
        <main className='dashboard'>
          <SmallSideBar/>
          <BigSideBar />
          <div>
            <Navbar />
            <div className='dashboard-content'>
              <Outlet context={{ user }}/>
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => useContext(DashboardContext);

export default Dashboard
