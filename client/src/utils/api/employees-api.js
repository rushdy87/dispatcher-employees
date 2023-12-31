import { makeApiRequest } from './api-helpers';

export const getEmployeeById = async (id) => {
  const url = `/employees/${id}`;
  return makeApiRequest(url, 'GET');
};

export const getAllEmployees = async () => {
  const url = '/employees';
  return makeApiRequest(url, 'GET');
};

export const getEmployeesByKey = async (query) => {
  const url = `/employees/by-key/q/?${query}`;
  return makeApiRequest(url, 'GET');
};

export const getEmployeesByName = async (name) => {
  const url = `/employees/name/${name}`;
  return makeApiRequest(url, 'GET');
};
export const getEmployeesByGender = async (genderName) => {
  const url = `/employees/gender/${genderName}`;
  return makeApiRequest(url, 'GET');
};

export const addEmployee = async (employee) => {
  const url = '/employees/newEmployees';
  return makeApiRequest(url, 'POST', { employeeData: employee });
};

export const updateEmployee = async (employee) => {
  const url = `/employees/${employee.id}`;
  return makeApiRequest(url, 'PATCH', { employeeData: employee });
};

export const deleteEmployee = async (id) => {
  const url = `/employees/${id}`;
  return makeApiRequest(url, 'DELETE');
};
