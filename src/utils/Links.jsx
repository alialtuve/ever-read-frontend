import React from "react";

import { FaListAlt, FaBook, FaUserShield, FaGetPocket, FaFolderOpen } from 'react-icons/fa';

const links = [
  { 
    text: 'all books',
    path: '.', 
    icon: <FaListAlt /> 
  },
  { 
    text: 'add book',
    path: 'add-book',
    icon: <FaBook /> 
  },
  { 
    text: 'return book', 
    path: 'return-book', 
    icon: <FaFolderOpen /> 
  },
  { 
    text: 'get book', 
    path: 'get-book', 
    icon: <FaGetPocket  /> 
  },
  { 
    text: 'profile', 
    path: 'profile', 
    icon: <FaUserShield /> 
  },
];

export default links;
