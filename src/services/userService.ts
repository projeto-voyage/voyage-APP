import api from './api';

export const createUser = async (user) => {
  const response = await api.post('/users', user);
  return response.data;
}

export const fetchUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

export const fetchUserById = async (id: number) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export const updateUser = async (id: number, user: any) => {
  const response = await api.put(`/users/${id}`, user);
  return response.data;
};

export const deleteUser = async (id: number) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};
