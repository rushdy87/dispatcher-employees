import React, { createContext, useState, useEffect } from 'react';
import { getAllDegrees } from '../../utils/api';

export const DegreesContext = createContext({});

export const DegreesContextProvider = ({ children }) => {
  const [degrees, setDegrees] = useState([]);
  const [error, setError] = useState(null); // Initialize error state
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const degreessList = await getAllDegrees();
        setDegrees(degreessList);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DegreesContext.Provider value={{ degrees, error, isLoading }}>
      {children}
    </DegreesContext.Provider>
  );
};
