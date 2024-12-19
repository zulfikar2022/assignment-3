export class CustomResponse {
    success;
    message;
    statusCode;
    data;
    constructor(message, statusCode, data, success = true) {
        this.success = success;
        this.message = message;
        this.statusCode = statusCode;
        this.data = data;
    }
}
