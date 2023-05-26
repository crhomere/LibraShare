export const addUserToLocalStorage = (user) => {
  try {
    const userJSON = JSON.stringify(user);
    localStorage.setItem('user', userJSON);
  } catch (error) {
    console.error('Error storing user data:', error);
  }
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user');
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('user');
  try {
    const user = result ? JSON.parse(result) : null;
    return user;
  } catch (error) {
    console.error('Error parsing user data:', error);
    return null;
  }
};
