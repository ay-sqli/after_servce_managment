import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { IoIosPaper } from 'react-icons/io';
import { IoIosEasel } from 'react-icons/io';



export const SidebarData = [
  {
    title: 'Accueil',
    path: '/',
    icon: React.createElement(AiFillHome),
    cName: 'nav-text'
  },
  {
    title: 'Tableau de board',
    path: '/Dashboard',
    icon: React.createElement(IoIosEasel),
    cName: 'nav-text'
  },
  {
    title: 'Réclamation',
    path: '/Claim',
    icon: React.createElement(IoIosPaper),
    cName: 'nav-text'
  },

];
