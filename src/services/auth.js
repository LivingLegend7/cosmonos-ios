// This service handles all authentication-related API calls
export const auth = {
  login: async (email, password) => {
    try {
      // Here you would normally make an API call to your backend
      // For now, we'll simulate a successful login
      const response = await simulateApiCall('login', { email, password });
      return response.user;
    } catch (error) {
      throw new Error('Login failed');
    }
  },

  register: async (email, password, schoolInfo) => {
    try {
      const response = await simulateApiCall('register', { 
        email, 
        password, 
        schoolInfo 
      });
      return response.user;
    } catch (error) {
      throw new Error('Registration failed');
    }
  },

  resetPassword: async (email) => {
    try {
      await simulateApiCall('resetPassword', { email });
      return true;
    } catch (error) {
      throw new Error('Password reset failed');
    }
  },

  logout: async () => {
    try {
      await simulateApiCall('logout');
      return true;
    } catch (error) {
      throw new Error('Logout failed');
    }
  },

  validateSession: async () => {
    try {
      const response = await simulateApiCall('validateSession');
      return response.valid;
    } catch (error) {
      return false;
    }
  }
};

// Temporary function to simulate API calls
const simulateApiCall = async (endpoint, data = {}) => {
  // Add random delay to simulate network latency
  await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));

  switch (endpoint) {
    case 'login':
      if (data.email && data.password) {
        return {
          user: {
            id: '123',
            email: data.email,
            name: 'Test User',
            school: 'Test University'
          }
        };
      }
      throw new Error('Invalid credentials');

    case 'register':
      return {
        user: {
          id: '123',
          email: data.email,
          name: 'New User',
          school: data.schoolInfo.school
        }
      };

    case 'resetPassword':
      return { success: true };

    case 'logout':
      return { success: true };

    case 'validateSession':
      return { valid: true };

    default:
      throw new Error('Unknown endpoint');
  }
};