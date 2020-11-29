import { CURR_WEATHER } from '../actions';

const INITIAL_STATE = {
  brasilia: '',
  washington: '',
  london: '',
  joanesburgo: '',
};

function weatherReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CURR_WEATHER:
    return { ...state,
      brasilia: action.brasilia,
      washington: action.washington,
      london: action.london,
      joanesburgo: action.joanesburgo };
  default:
    return state;
  }
}

export default weatherReducer;
