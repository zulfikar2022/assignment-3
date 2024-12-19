export class CustomError extends Error {
  public success: boolean;
  public statusCode: number;
  public error: any;
  public stack?: string;

  constructor(message: string, statusCode: number, error: any) {
    super(message);
    this.success = false;
    this.statusCode = statusCode;
    this.error = error;
    this.stack = error.stack || new Error().stack;
  }
}
