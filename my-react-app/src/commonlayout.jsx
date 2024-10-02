import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import "./App";
const Commonlayout = () => {
    
 
  return (
    <div >
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Outlet/>
    </div>
  );
};

export default Commonlayout;
