export class CustomError extends Error {
    success;
    statusCode;
    error;
    stack;
    constructor(message, statusCode, error) {
        super(message);
        this.success = false;
        this.statusCode = statusCode;
        this.error = error;
        this.stack = error.stack || new Error().stack;
    }
}
