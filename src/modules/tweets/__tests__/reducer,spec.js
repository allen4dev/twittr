import { INITIAL_STATE } from '../model';
import * as actions from '../actions';
import reducer from '../reducer';
import currentReducer from '../reducer/current';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('current', () => {
  const CURRENT_STATE = INITIAL_STATE.current;

  it('should handle SET_TOKEN action', () => {
    const token = 'xxx-xxx-xxx';

    const nextState = currentReducer(CURRENT_STATE, actions.setToken(token));

    expect(nextState).toEqual({
      ...CURRENT_STATE,
      token,
    });
  });

  it('should handle SET_CURRENT_USER action', () => {
    const id = '1';

    const nextState = currentReducer(CURRENT_STATE, actions.setCurrentUser(id));

    expect(nextState).toEqual({
      ...CURRENT_STATE,
      id,
    });
  });
});
