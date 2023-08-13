/**
 * AppError class - Operational errors
 * @class AppError
 */
class AppError extends Error {
  /**
   * @param {string} message - Error message
   * @param {number} statusCode - http status code
   * @param {string} code - internal error code
   * @param {object} details - error details
   */
  constructor(message, statusCode, code, details) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;
  }
}

module.exports = AppError;
