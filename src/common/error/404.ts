// baseError.js

import { HttpCodes } from "../../types/httpCode.interface";
import BaseError from "./base";

class NOT_FOUND_ERROR extends BaseError {
  constructor(description = "Not found!") {
    super("NOT FOUND", HttpCodes.NOT_FOUND, true, description);
  }
}

export default NOT_FOUND_ERROR;
