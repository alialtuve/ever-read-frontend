import Wrapper from "../assets/wrappers/BigSideBarWrapper";
import { useDashboardContext } from "../pages/Dashboard";
import { LogoForm } from "./Logo";
import NavLinks from "./NavLinks";

const BigSideBar = () => {
  const {showSidebar} = useDashboardContext();

  return (
    <Wrapper>
      <div className={
        showSidebar? 'sidebar-container'
        : 'sidebar-container show-sidebar'
      }>
        <div className="content">
          <header>
            <LogoForm />
          </header>
          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSideBar