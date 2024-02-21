import { HttpCodes } from "../../types/httpCode.interface";
import BaseError from "./base";

class BAD_REQUEST_ERROR extends BaseError {
  constructor(description = "Bad request!") {
    super("BAD REQUEST", HttpCodes.BAD_REQUEST, true, description);
  }
}

export default BAD_REQUEST_ERROR;
