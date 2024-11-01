import { FaTimes } from "react-icons/fa";
import Wrapper from "../assets/wrappers/SmallSideBarWrapper";
import { LogoForm } from "./Logo";
import NavLinks from "./NavLinks";
import { useDashboardContext } from "../pages/Dashboard";

const SmallSideBar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();  

  return (
    <Wrapper>
      <div className={
          showSidebar? 'sidebar-container show-sidebar' : 
          'sidebar-container'
        }
      >
        <div className="content">
          <button 
            type="button"
            className="close-btn"
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
          <header>
            <LogoForm />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSideBar