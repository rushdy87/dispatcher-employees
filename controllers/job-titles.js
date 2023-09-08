const JobTitles = require('../models/job-titles');

const { handleResponse } = require('../util/helper-functions');

exports.getJobTitleById = async (req, res, next) => {
  try {
    const jobTitleId = req.params.id;

    const jobTitle = await JobTitles.findByPk(jobTitleId);

    if (!jobTitle) {
      return res.status(404).json({ error: 'job title not found' });
    }

    return handleResponse(res, null, jobTitle);
  } catch (error) {
    return handleResponse(res, error);
  }
};

exports.createJobTitle = async (req, res, next) => {
  try {
    const { jobTitleData } = req.body;

    const jobTitle = await JobTitles.create(jobTitleData);

    if (!jobTitle) {
      return res.status(404).json({ error: 'job title not found' });
    }

    return handleResponse(res, null, jobTitle);
  } catch (error) {
    return handleResponse(res, error);
  }
};

exports.fetchAllJobTitles = async (req, res, next) => {
  try {
    const jobTitles = await JobTitles.findAll();

    if (jobTitles.length === 0) {
      return res.status(404).json({ error: 'No job title not found' });
    }

    return handleResponse(res, null, jobTitles);
  } catch (error) {
    return handleResponse(res, error);
  }
};

exports.updateJobTitle = async (req, res, next) => {
  try {
    const jobTitleId = req.params.id;
    const { jobTitleData } = req.body;

    let jobTitle = await JobTitles.findByPk(jobTitleId);

    if (!jobTitle) {
      jobTitle = await JobTitles.create(jobTitle);
    } else {
      await JobTitles.update(jobTitleData, {
        where: {
          id: jobTitleId,
        },
      });
    }

    if (!jobTitle) {
      return res.status(500).json({ error: 'Internal server error' });
    }

    return handleResponse(res, null, { message: 'job title was updated' });
  } catch (error) {
    return handleResponse(res, error);
  }
};

exports.removeJobTitle = async (req, res, next) => {
  try {
    const jobTitleId = req.params.id;

    let jobTitle = await JobTitles.findByPk(jobTitleId);
    if (!jobTitle) {
      return res.status(404).json({ error: 'job Title not found' });
    }

    const deleteResult = await JobTitles.destroy({
      where: { id: jobTitleId },
    });

    if (deleteResult === 1) {
      // The deletion was successful (1 row affected)
      return handleResponse(res, null, { message: 'Job title was deleted' });
    } else {
      // The deletion did not affect any rows (Job title not found)
      return res.status(404).json({ error: 'Job title not found' });
    }
  } catch (error) {
    return handleResponse(res, error);
  }
};
