import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideNavbar from '../../components/SideNavbar/SideNavbar'
import HomePage from '../HomePage/HomePage';
import UserProfile from '../../components/UserProfile/UserProfile';
import AddBook from '../../components/AddBook/AddBook';

const Dash = () => {
  return (
    <div>
      <SideNavbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="user-profile/:userId" element={<UserProfile />} />
        <Route path="add-book" element={<AddBook />} />
      </Routes>
    </div>
  );
};

export default Dash;
