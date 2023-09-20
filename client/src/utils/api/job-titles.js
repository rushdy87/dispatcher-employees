import { makeApiRequest } from './api-helpers';

export const getJobTitleById = (id) => {
  const url = `/job-titles/${id}`;
  return makeApiRequest(url, 'GET');
};

export const getAllJobTitles = async () => {
  const url = '/job-titles';
  return makeApiRequest(url, 'GET');
};

export const addJobTitle = async (jobTitle) => {
  const url = '/job-titles/newJobTitles';
  return makeApiRequest(url, 'POST', { jobTitleData: jobTitle });
};

export const updateJobTitle = async (jobTitle) => {
  const url = `/job-titles/${jobTitle.id}`;
  return makeApiRequest(url, 'PATCH', { jobTitleData: jobTitle });
};

export const deleteJobTitle = async (id) => {
  const url = `/job-titles/${id}`;
  return makeApiRequest(url, 'DELETE');
};
