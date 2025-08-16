import React, { createContext, useEffect, useState } from 'react';
import axios from '../api/axiosInstance';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  const loadUser = async () => {
    try {
      setLoadingAuth(true);
      const res = await axios.get('/auth/me');
      setUser(res.data.user);
    } catch (err) {
      setUser(null);
    } finally {
      setLoadingAuth(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const login = async (email, password) => {
    const res = await axios.post('/auth/login', { email, password });
    setUser(res.data);
    return res.data;
  };

  const register = async (email, password) => {
    const res = await axios.post('/auth/register', { email, password });
    setUser(res.data);
    return res.data;
  };

  const logout = async () => {
    await axios.get('/auth/logout');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loadingAuth, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
