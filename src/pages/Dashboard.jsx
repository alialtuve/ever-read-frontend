import { Outlet, redirect, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/DashboardWrapper';
import { Navbar, SmallSideBar, BigSideBar } from '../components';
import { createContext, useContext, useState } from 'react';

export const loader = () => {
  return 'hello world';
}

const DashboardContext = createContext();

const Dashboard = () => {
  const data = useLoaderData();
  console.log(data);
  
  
  const [showSidebar, setShowSidebar] = useState(false);
  
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }

  const logoutUser = async () => {
    console.log('logout user');
    
  }

  return (
    <DashboardContext.Provider
      value={{
        
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
              <Outlet/>
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => useContext(DashboardContext);

export default Dashboard
