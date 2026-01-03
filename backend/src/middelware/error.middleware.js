import logger from "../utils/logger.js";

const errorHandling = (err, req, res, next) => {
  logger.error({
    message: err.message,
    stack: err.stack,
    path: req.originalUrl,
    method: req.method
  });

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    sucess: false,
    message: err.message || "Internal Server Error",
  });
};

export default errorHandling;
