const errorHandler = async (err, req, res, next) => {
  res.status(500).json({ message: err.message });
};

export default errorHandler;
