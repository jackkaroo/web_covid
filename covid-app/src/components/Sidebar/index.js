import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="sidebar">
        <div className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </div>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="sidebar-toggle">
            <div className="menu-bars color-white">
              <AiIcons.AiOutlineClose />
            </div>
          </li>
          <li className="nav-text">
            <Link to="/about"><span>Statistics</span></Link>
          </li>
          <li className="nav-text">
            <Link to="/about"><span>About</span></Link>
          </li>
          <li className="nav-text">
            <Link to="/contact"><span>Contact us</span></Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
