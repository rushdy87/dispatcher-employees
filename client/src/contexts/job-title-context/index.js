import { createContext, useState, useEffect } from 'react';
import { getAllJobTitles } from '../../utils/api';

export const JobTitleContext = createContext({});

export const JobTitleContextProvider = ({ children }) => {
  const [jobTitles, setJobTitles] = useState([]);
  const [error, setError] = useState(null); // Initialize error state
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobTitlesList = await getAllJobTitles();
        setJobTitles(jobTitlesList);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <JobTitleContext.Provider value={{ jobTitles, error, isLoading }}>
      {children}
    </JobTitleContext.Provider>
  );
};
