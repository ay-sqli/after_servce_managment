import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, Navigate, Outlet } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import DropDownProfile from './DropDownProfile';
import { useStateContext } from '../Contexts/ContextProvider';
import axiosClient from "../axios";
import { useEffect } from "react";

//

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}




function DefaultLayout() {
  const { currentUser, userToken, setCurrentUser, setUserToken } =
    useStateContext();

  if (!userToken) {
    return <Navigate to="login" />;
  }

  

  useEffect(() => {
    axiosClient.get('/me')
      .then(({ data }) => {
        setCurrentUser(data)
      })
  }, [])


  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      

      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar '>
         
          <Link to='#' className='menu-bars shadow-md rounded-full bg-sky-500 hover:bg-sky-600' onClick={showSidebar}>
            <FaIcons.FaThList  />
          </Link>
          <h1 className="ml-8 text-xl font-mono font-medium leading-none tracking-tight text-gray-900 ">Gestion de Reclamation</h1>
           <div className="flex-grow" />
          <p className='cursor-pointer flex items-center user mr-14'  onClick={() => setOpenProfile(prev => !prev)}>
            {currentUser.name}
            <FaIcons.FaAngleDown className='ml-1 text-black'style={{ color: 'black' }} />
          </p>
          {openProfile && <DropDownProfile />}
        </div>
            <Outlet/>   
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
              
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            
          </ul>
          </nav>

      </IconContext.Provider>
    
    </>
  );
}

export default DefaultLayout;
