import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { EmployeesContextProvider } from './contexts/employees-context';
import { TableColumnsContextProvider } from './contexts/Table-columns-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <EmployeesContextProvider>
      <TableColumnsContextProvider>
        <App />
      </TableColumnsContextProvider>
    </EmployeesContextProvider>
  </BrowserRouter>
);
