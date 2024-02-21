import { HttpCodes } from "../../types/httpCode.interface";
import BaseError from "./base";

class SERVER_INTERVAL_ERROR extends BaseError {
    constructor(description = "Server Internal Error!") {
      super("INTERNAL SERVER ERROR", HttpCodes.INTERNAL_SERVER_ERROR, true, description);
    }
  }

export default SERVER_INTERVAL_ERROR;