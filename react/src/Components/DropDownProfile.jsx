import React from 'react';
import { FaCog, FaPersonBooth, FaPrescription, FaReact, FaSignOutAlt, FaUser } from 'react-icons/fa';

function DropDownProfile() {
  const logout = (ev) => {
    ev.preventDefault();
    axiosClient.post("/logout").then((res) => {
      setCurrentUser({});
      setUserToken(null);
    });
  };
  return (
    <div className='flex flex-col DropDownProfile'>
      <ul className='flex flex-col gap-4 text-white ml-6 '>
        <li className='cursor-pointer flex items-center hover:text-sky-700'>
          <FaUser className='mr-2 ' />
          Profile
        </li>
        <li className='cursor-pointer flex items-center hover:text-sky-700'>
          <FaCog className='mr-2' />
          Parametre
        </li>
        <li className='cursor-pointer flex items-center hover:text-sky-700'>
          <FaSignOutAlt className='mr-2' />
          <a
           href="#"
           onClick={(ev) => logout(ev)}
           className={"block px-4 py-2 text-sm text-gray-700"}
          >
          Se deconnecter                              
          </a>
         
        </li>
      </ul>
    </div>
  );
}

export default DropDownProfile;


