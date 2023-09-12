import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import {
  DegreesContextProvider,
  EmployeesContextProvider,
  JobTitleContextProvider,
  TableColumnsContextProvider,
} from './contexts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <EmployeesContextProvider>
      <TableColumnsContextProvider>
        <DegreesContextProvider>
          <JobTitleContextProvider>
            <App />
          </JobTitleContextProvider>
        </DegreesContextProvider>
      </TableColumnsContextProvider>
    </EmployeesContextProvider>
  </BrowserRouter>
);
