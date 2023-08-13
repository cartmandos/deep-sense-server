const AppError = require('../errors/AppError');
const BAD_REQUEST = 400;
const INTERNAL_SERVER_ERROR = 500;

/**
 * @param {string} format - logger format
 * @returns {middleware} error handler middleware
 */
function errorHandler(format = '') {
  return (err, req, res, next) => {
    const statusCode =
      err.statusCode || (err instanceof AppError ? BAD_REQUEST : INTERNAL_SERVER_ERROR);
    const error =
      err.message ||
      (err.statusCode === INTERNAL_SERVER_ERROR ? 'Internal Server Error' : 'Something went wrong');

    const code = err.code;
    const details = err.details;

    res.status(statusCode).send({ error, code, details });

    if (format) {
      const logStackTrace = format === 'dev';
      errorLogger(err, logStackTrace);
    }
  };
}

/**
 * @param {Error} err
 * @param {boolean} stack
 */
function errorLogger(err, errStack = false) {
  logErrorChain(err);

  errStack && console.error(err.stack);
}

/**
 * logs errors chain recursively
 * @param {Error} err
 */
function logErrorChain(err) {
  const logSummary = (err, prefix) =>
    console.error(
      `${prefix} \x1b[31m${err.name}\x1b[0m`,
      err.message,
      `\n${err?.stack.split('\n')[1]}`
    );

  function recursiveLogSummary(err, prefix = '') {
    if (err instanceof Error) {
      logSummary(err, prefix);
      err.error && recursiveLogSummary(err.error, prefix + ' ->');
    }
  }

  recursiveLogSummary(err);
}

module.exports = errorHandler;
