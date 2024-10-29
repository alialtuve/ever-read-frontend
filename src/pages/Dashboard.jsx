import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/DashboardWrapper';
import { Navbar, SmallSideBar, BigSideBar } from '../components';
import { createContext, useContext, useState } from 'react';

const DashboardContext = createContext();

const Dashboard = () => {
  const user = {name:'usuario'}
  
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
