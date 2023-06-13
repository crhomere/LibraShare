import { useSelector } from 'react-redux';

const AccountDetails = () => {
  const { user } = useSelector((store) => store.user);

  console.log(user);
  return (
    <div>
      <h1> Account Details</h1>
      <div> First Name: {user.firstName}</div>
      <div> First Name: {user.lastName}</div>
      <div>Email: {user.email}</div>
      <div> Address line: {user.addressLine}</div>
      <div>City: {user.city}</div>
      <div>State: {user.state}</div>
      <div>Zip Code: {user.zipcode}</div>
      
    </div>
  );
};

export default AccountDetails;
