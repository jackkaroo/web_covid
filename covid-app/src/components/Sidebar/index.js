import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import SidebarData from './data';

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
          {SidebarData.map((item) => (
            <li key={item.title} className="nav-text">
              <Link to={item.path}><span>{item.title}</span></Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
