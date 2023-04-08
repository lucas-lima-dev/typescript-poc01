
import {ApplicationError, EmailNotAvailableError} from '../protocols.js'

function conflictError(message: string): ApplicationError {
  return {
    name: "ConflictError",
    message,
  };
}

function duplicatedEmailError(email: string): EmailNotAvailableError {
  return {
    name: "DuplicatedEmailError",
    message: "There is already an user with given email",
    email,
  };
}

function unauthorizedError(): ApplicationError {
  return {
    name: "UnauthorizedError",
    message: "You must be signed in to continue",
  };
}

function notFoundError(): ApplicationError {
  return {
    name: "NotFoundError",
    message: "No result for this search!",
  };
}

function invalidCredentialsError(): ApplicationError {
  return {
    name: "InvalidCredentialsError",
    message: "Email or password are incorrect",
  };
}

export default {
  conflictError,
  duplicatedEmailError,
  unauthorizedError,
  notFoundError,
  invalidCredentialsError,
};