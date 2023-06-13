if (!process.env.REACT_APP_API_KEY) {
    throw new Error('No GOOGLE_MAPS_API_KEY provided');
}
  
  export const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;