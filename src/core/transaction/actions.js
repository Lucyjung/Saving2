import {
  CREATE_EXPENSE_ERROR,
  CREATE_EXPENSE_SUCCESS,
  DELETE_EXPENSE_ERROR,
  DELETE_EXPENSE_SUCCESS,
  UPDATE_EXPENSE_ERROR,
  UPDATE_EXPENSE_SUCCESS,
  CREATE_INCOME_ERROR,
  CREATE_INCOME_SUCCESS,
  DELETE_INCOME_ERROR,
  DELETE_INCOME_SUCCESS,
  UPDATE_INCOME_ERROR,
  UPDATE_INCOME_SUCCESS

} from './action-types';

export function createExpenseError(transaction) {
  return {
    type: CREATE_EXPENSE_ERROR,
    payload: transaction
  };
}
export function createExpenseSuccess(transaction) {
  return {
    type: CREATE_EXPENSE_SUCCESS,
    payload: transaction
  };
}
export function DeleteExpenseError(transaction) {
  return {
    type: DELETE_EXPENSE_ERROR,
    payload: transaction
  };
}
export function DeleteExpenseSuccess(transaction) {
  return {
    type: DELETE_EXPENSE_SUCCESS,
    payload: transaction
  };
}
export function UpdateExpenseError(transaction) {
  return {
    type: UPDATE_EXPENSE_ERROR,
    payload: transaction
  };
}
export function UpdateExpenseSuccess(transaction) {
  return {
    type: UPDATE_EXPENSE_SUCCESS,
    payload: transaction
  };
}
export function CreateIncomeError(transaction) {
  return {
    type: CREATE_INCOME_ERROR,
    payload: transaction
  };
}
export function CreateIncomeSuccess(transaction) {
  return {
    type: CREATE_INCOME_SUCCESS,
    payload: transaction
  };
}
export function UpdateIncomeError(transaction) {
  return {
    type: UPDATE_INCOME_ERROR,
    payload: transaction
  };
}
export function UpdateIncomeSuccess(transaction) {
  return {
    type: UPDATE_INCOME_SUCCESS,
    payload: transaction
  };
}
export function DeleteIncomeError(transaction) {
  return {
    type: DELETE_INCOME_ERROR,
    payload: transaction
  };
}
export function DeleteIncomeSuccess(transaction) {
  return {
    type: DELETE_INCOME_SUCCESS,
    payload: transaction
  };
}
