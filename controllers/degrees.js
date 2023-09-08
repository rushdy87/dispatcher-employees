const Degrees = require('../models/degrees');

function handleResponse(
  res,
  error,
  successData,
  errorMessage = 'Internal server error'
) {
  if (error) {
    console.error(error);
    return res.status(500).json({ error: errorMessage });
  }
  return res.status(200).json(successData);
}

exports.getDegreeById = async (req, res, next) => {
  try {
    const degreeId = req.params.id;
    const degree = await Degrees.findByPk(degreeId);

    if (!degree) {
      return res.status(404).json({ error: 'Degree not found' });
    }

    return handleResponse(res, null, degree);
  } catch (error) {
    return handleResponse(res, error);
  }
};

exports.createDegree = async (req, res, next) => {
  try {
    const { degreeData } = req.body;
    const degree = await Degrees.create(degreeData);

    if (!degree) {
      return handleResponse(res, error);
    }
    return handleResponse(res, null, degree);
  } catch (error) {
    return handleResponse(res, error);
  }
};

exports.fetchAllDegrees = async (req, res, next) => {
  try {
    const degrees = await Degrees.findAll();
    if (degrees.length === 0) {
      return res.status(404).json({ error: 'No Degree found' });
    }
    return handleResponse(res, null, degrees);
  } catch (error) {
    return handleResponse(res, error);
  }
};

exports.updateDegree = async (req, res, next) => {
  try {
    const degreeId = req.params.id;
    const { degreeData } = req.body;

    let degree = await Degrees.findByPk(degreeId);

    if (!degree) {
      degree = await Degrees.create(degreeData);
    } else {
      await Degrees.update(degreeData, {
        where: {
          id: degreeId,
        },
      });
    }

    if (!degree) {
      return res.status(500).json({ error: 'Internal server error' });
    }

    return handleResponse(res, null, { message: 'Degree was updated' });
  } catch (error) {
    return handleResponse(res, error);
  }
};

exports.removeDegree = async (req, res, next) => {
  try {
    const degreeId = req.params.id;

    let degree = await Degrees.findByPk(degreeId);
    if (!degree) {
      return res.status(404).json({ error: 'Degree not found' });
    }

    const deleteResult = await Degrees.destroy({
      where: { id: degreeId },
    });

    if (deleteResult === 1) {
      // The deletion was successful (1 row affected)
      return handleResponse(res, null, { message: 'Degree was deleted' });
    } else {
      // The deletion did not affect any rows (Degree not found)
      return res.status(404).json({ error: 'Degree not found' });
    }
  } catch (error) {
    return handleResponse(res, error);
  }
};
