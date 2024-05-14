const errorHandler = (err, req, res, next) => {
  console.error(err);
  const errorMessage = err.message || 'Unexpected error';
  return res.status(500).json({ message: errorMessage });
};

module.exports = { errorHandler };
