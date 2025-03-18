import axios from 'axios';
import { useEffect, useState } from 'react';

const API_URL = '/api/data/users?timeout=10000';

interface User {
  id: number;
  name: string;
}

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [isError, setIsError] = useState(false);

  const fetchUsers = () => {
    axios
      .get(API_URL, { timeout: 5000 })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        if (error.code === 'ECONNABORTED') {
          setIsError(true);
        }
      });
  };

  const retryRequest = () => {
    setIsError(false);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, isError, retryRequest };
}
