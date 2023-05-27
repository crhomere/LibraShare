import React from 'react';
import { Routes, Route } from 'react-router-dom';

import UserAccountNav from './UserAccountNav';
import AccountDetails from './AccountDetails';
import UserBooks from './UserBooks';

const UserProfile = () => {
  return (
    <div>
      <UserAccountNav />
      <Routes>
        <Route index element={<AccountDetails />} />
        <Route path="/books" element={<UserBooks />} />
      </Routes>
    </div>
  );
};

export default UserProfile;
