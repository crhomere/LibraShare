import React from 'react';
import { Routes, Route } from 'react-router-dom';

import UserAccountNav from './UserAccountNav';
import AccountDetails from './AccountDetails';
import UserBooks from './UserBooks';
import WishList from './WishList';

const UserProfile = () => {
  return (
    <div>
      <UserAccountNav />
      <Routes>
        <Route index element={<AccountDetails />} />
        <Route path="/books" element={<UserBooks />} />
        <Route path="/wish-list" element={<WishList />} />
      </Routes>
    </div>
  );
};

export default UserProfile;
