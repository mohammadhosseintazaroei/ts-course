enum Steps {
  zero,
  one,
  two,
  three,
}
console.log(Steps.zero);

//pending, tryToCash, failed, success, warning, error, info
enum USER_PAYMENT_STATUS {
  PENDING = "PENDING",
  TRY_TO_CASH = "TRY_TO_CASH",
  FAILED = "FAILED",
  SUCCESS = "SUCCESS",
  WARNING = "WARNING",
  ERROR = "ERROR",
  INFO = "INFO",
}

enum USER_ACTIVE_STATE {
  TRUE = 1,
  FALSE = 0,
}

let user: Object = {
  name: "",
  age: 25,
  state: USER_PAYMENT_STATUS.SUCCESS,
  isActive: !!USER_ACTIVE_STATE.FALSE,
};
console.log(user);

enum ERROR_MESSAGES {
  VALIDATION = "error for validation",
  NOT_FOUND = "error for notfound",
  SERVER_ERROR = "error for internal server error",
  UNAUTHORIZATION = "error for unauthorization",
}

console.log(ERROR_MESSAGES.VALIDATION);

enum StatusCodes {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NOT_FOUND = 404,
  BAD_REQUEST = 400,
  UNAUTHORIZATION = 401,
}
function GetOneBlogById( error: { code: number }):any {
  if (error.code == StatusCodes.NOT_FOUND) {
    return {
      status: StatusCodes.NOT_FOUND,
      message: ERROR_MESSAGES.NOT_FOUND,
    };
  }else{
    return {
        status: StatusCodes.OK
    }
  }
}

console.log(GetOneBlogById({code:StatusCodes.NOT_FOUND}))