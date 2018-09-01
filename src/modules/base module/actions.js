import * as actionTypes from './actionTypes';

export function type() {
  return {
    type: actionTypes.TYPE,
    payload: { a: 'hey' },
  };
}
