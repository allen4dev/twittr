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

  me: {
    async fetchTimeline(token) {
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      const url = `me/timeline`;

      const response = await axiosInstance.get(url, headers);

      return response;
    },

    async notifications(token) {
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      const url = `me/notifications`;

      const response = await axiosInstance.get(url, headers);

      return response;
    },
  },

  users: {
    async follow(id, token) {
      const headers = { headers: { Authorization: `Bearer ${token}` } };
      const url = `users/${id}/follow`;

      const response = await axiosInstance.post(url, headers);

      return response;
    },
  },

  tweets: {
    async createTweet({ details, token }) {
      const headers = { headers: { Authorization: `Bearer ${token}` } };

      const response = await axiosInstance.post(
        'tweets',
        details.body,
        headers,
      );

      return response;
    },

    async favorite({ id, token }) {
      const url = `tweets/${id}/favorite`;
      const headers = { headers: { Authorization: `Bearer ${token}` } };

      const response = await axiosInstance.post(url, headers);

      return response;
    },

    async retweet({ id, token }) {
      const url = `tweets/${id}/retweet`;
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

    async favorite({ id, token }) {
      const url = `replies/${id}/favorite`;
      const headers = { headers: { Authorization: `Bearer ${token}` } };

      const response = await axiosInstance.post(url, headers);

      return response;
    },
  },
};
