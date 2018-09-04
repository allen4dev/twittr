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
      const headers = { headers: { Authorization: `Bearer ${token}` } };

      const response = await axiosInstance.post('tweets', headers);

      return response;
    },

    async favorite({ id, token }) {
      const url = `tweets/${id}/favorite`;
      const headers = { headers: { Authorization: `Bearer ${token}` } };

      const response = await axiosInstance.post(url, headers);

      return response;
    },
  },

  replies: {
    async replyTweet({ details, token }) {
      const url = `tweets/${details.tweetId}/replies`;
      const headers = { headers: { Authorization: `Bearer ${token}` } };

      const response = await axiosInstance.post(url, headers);

      return response;
    },
  },
};
