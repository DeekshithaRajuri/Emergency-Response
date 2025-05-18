// Utility function to store the token in sessionStorage
export const storeToken = (token) => {
    sessionStorage.setItem("authToken", token);
  };
  
  // Utility function to get the token from sessionStorage
  export const getToken = () => {
    return sessionStorage.getItem("authToken");
  };
  
  // Utility function to add token to headers for fetch requests
  export const getAuthHeaders = () => {
    const token = getToken();
    if (token) {
      return {
        "Authorization": `Bearer ${token}`,
      };
    }
    return {};
  };
  // utils/authUtils.js

