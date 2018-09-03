import axiosInstance from './axiosInstance';

export default {
  auth: {
    async login(credentials) {
      const response = await axiosInstance.post('auth/login', credentials);

      return response;
    },

    async register(details) {
      const response = await axiosInstance.post('auth/register', details);

      return response;
    },
  },

  tweets: {
    async createTweet({ details, token }) {
      const response = axiosInstance.get('tweets', {
        headers: { Authorization: `Bearer ${token}` },
      });

      return response;
    },
  },
};
