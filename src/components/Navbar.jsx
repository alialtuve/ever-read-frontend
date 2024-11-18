import Wrapper from "../assets/wrappers/NavbarWrapper";
import { FaAlignLeft } from 'react-icons/fa';
import {LogoForm} from './Logo';
import { useDashboardContext } from "../pages/Dashboard";
import LogOut from "./LogOut";


const Navbar = () => {
  const {toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div className="nav-container">
        <button
          type="button"
          className="toggle-btn"
          onClick={toggleSidebar}
        >
          <FaAlignLeft/>
        </button>
        <div>
          <LogoForm />
          <h3 className="logo-text"> dashboard</h3>
        </div>
        <div className="btn-container">
          <LogOut />
        </div>
      </div>
    </Wrapper>
  )
}
export default Navbar