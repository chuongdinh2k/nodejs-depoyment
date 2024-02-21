// baseError.js

import { HttpCodes } from "../../types/httpCode.interface";

class BaseError extends Error {
    public readonly name: string;
    public readonly statusCode: HttpCodes;
    public readonly isOperational: boolean;

    constructor(name: string, httpCode: HttpCodes, isOperational: boolean, description: string) {
      super(description);
  
      Object.setPrototypeOf(this, new.target.prototype);
      this.name = name;
      this.isOperational = isOperational;
      this.statusCode = httpCode;
      Error.captureStackTrace(this);
    }
  }

export default BaseError;
  