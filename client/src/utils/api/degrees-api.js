import { makeApiRequest } from './api-helpers';

export const getDegreeById = async (id) => {
  const url = `/degrees/${id}`;
  return makeApiRequest(url, 'GET');
};

export const getAllDegrees = async () => {
  const url = '/degrees';
  return makeApiRequest(url, 'GET');
};

export const addDegree = async (degree) => {
  const url = '/degrees/newDegree';
  return makeApiRequest(url, 'POST', { degreeData: degree });
};

export const updateDegree = async (degree) => {
  const url = `/degrees/${degree.id}`;
  return makeApiRequest(url, 'PATCH', { degreeData: degree });
};

export const deleteDegree = async (id) => {
  const url = `/degrees/${id}`;
  return makeApiRequest(url, 'DELETE');
};
