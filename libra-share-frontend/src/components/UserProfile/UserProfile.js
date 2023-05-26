import { useSelector } from 'react-redux';

const UserProfile = () => {
  
  const { user } = useSelector((store) => store.user);
  return <div>Hello {user.username}!</div>;
};

export default UserProfile;
