import { useDashboardContext } from "../pages/Dashboard";
import links from "../utils/Links";
import { NavLink } from "react-router-dom";

const NavLinks = ({isBigSidebar}) => {
  const {toogleSidebar} = useDashboardContext();
  
  return (
    <div>
      <div className="nav-links">
            {links.map((link)=>{ 
              const {text, path, icon} = link;
              return (
                <NavLink 
                  to={path} 
                  key={text}
                  className='nav-link'
                  onClick={isBigSidebar? null: toogleSidebar}
                  end
                >
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              )
            })}
      </div>
    </div>
  )
}

export default NavLinks
