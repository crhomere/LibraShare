import React from 'react';
import { useSelector } from 'react-redux';
import './AccountDetails.css';

const AccountDetails = () => {
  const { user } = useSelector((store) => store.user);

  return (
    <div>
      <h1 className='account-header'>Account</h1>

      <div className="account-detail">
        <h5>First Name:</h5>
        <p>{user.firstName}</p>
      </div>

      <div className="account-detail">
        <h5>Last Name:</h5>
        <p>{user.lastName}</p>
      </div>

      <div className="account-detail">
        <h5>Email:</h5>
        <p>{user.email}</p>
      </div>

      <div className="account-detail">
        <h5>Address Line:</h5>
        <p>{user.addressLine}</p>
      </div>

      <div className="account-detail">
        <h5>City:</h5>
        <p>{user.city}</p>
      </div>

      <div className="account-detail">
        <h5>State:</h5>
        <p>{user.state}</p>
      </div>

      <div className="account-detail">
        <h5>Zip Code:</h5>
        <p>{user.zipcode}</p>
      </div>

      <div className="account-detail">
        <h5>Phone number:</h5>
        <p>{user.phoneNumber}</p>
      </div>
    </div>
  );
};

export default AccountDetails;
