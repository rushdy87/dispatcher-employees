// Helper function to handle errors and send responses
exports.handleResponse = (
  res,
  error,
  successData,
  errorMessage = 'Internal server error'
) => {
  if (error) {
    console.error(error);
    return res.status(500).json({ error: errorMessage });
  }
  return res.status(200).json(successData);
};
