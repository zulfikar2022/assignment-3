export class CustomResponse {
  success: boolean;
  message: string;
  statusCode: number;
  data: any;

  constructor(
    message: string,
    statusCode: number,
    data: any,
    success: boolean = true
  ) {
    this.success = success;
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
  }
}
