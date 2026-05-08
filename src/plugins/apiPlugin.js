
export const API_BASE_URL = process.env.VUE_APP_API_URL;

async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

const api = {
  todo: {
    // getToDo: () => apiRequest('/todos?limit=0'),
    getToDo: () => apiRequest('/todos'),
    getToDoById: (id) => apiRequest(`/todos/${id}`),
  },

};

export default {
  install(app) {
    app.config.globalProperties.$api = api;
    app.provide('api', api); 
  },
}