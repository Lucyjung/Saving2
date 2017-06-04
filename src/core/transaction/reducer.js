import { List, Record } from 'immutable';
import {
  SIGN_OUT_SUCCESS
} from 'src/core/auth';

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

export const TransState = new Record({
  deleted: null,
  list: new List(),
  previous: null,
  transaction: null
});

export function tasksReducer(state = new TransState(), {payload, type}) {
  switch (type) {
    case CREATE_EXPENSE_ERROR:
    case CREATE_EXPENSE_SUCCESS:
    case DELETE_EXPENSE_ERROR:
    case DELETE_EXPENSE_SUCCESS:
    case UPDATE_EXPENSE_ERROR:
    case UPDATE_EXPENSE_SUCCESS:
    case CREATE_INCOME_ERROR:
    case CREATE_INCOME_SUCCESS:
    case DELETE_INCOME_ERROR:
    case DELETE_INCOME_SUCCESS:
    case UPDATE_INCOME_ERROR:
    case UPDATE_INCOME_SUCCESS:
      return state.merge({
        deleted: null,
        previous: null,
        list: payload,
        transaction: null
      });

    case SIGN_OUT_SUCCESS:
      return new TransState();

    default:
      return state;
  }
}
