import { useSelector } from 'react-redux';

const UserProfile = () => {
  const { user } = useSelector((store) => store.user);
  return <div>
    <h1 className="text-center">Account details</h1>
    <h3 className="text-center">My books</h3>
    </div>;
};

export default UserProfile;
