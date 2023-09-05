import Config from 'react-native-config';

const Api = {
    async fetch(url, body = null, headers = {}, method = 'POST') {
      try {
        const response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
            ...headers,
          },
          body: body ? JSON.stringify(body) : null,
        });
  
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
  
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error(`API Request Error: ${error.message}`);
      }
    }
  };
  
  export default Api;
  