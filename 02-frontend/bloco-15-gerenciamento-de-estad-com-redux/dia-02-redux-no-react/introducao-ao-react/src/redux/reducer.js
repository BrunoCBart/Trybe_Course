import { combineReducers } from 'redux';
import { CHANGE_SIGNAL } from './actionCreators';
import { MOVE_CAR } from './actionCreators';

const SIGNAL_STATE = {
  color: 'red',
}

const CARS_STATE = {
  red: false,
  blue: false,
  yellow: false,
}

const signalReducer = (state = SIGNAL_STATE, action) => {
  switch(action.type) {
    case CHANGE_SIGNAL:
      return {...state, color: action.payload}
    default: return state
  }
}

const moveCarReducer = (state = CARS_STATE, action) => {
  switch(action.type) {
    case MOVE_CAR:
      return {...state, [action.car]: action.side}
    default: return state
  }
}

const rootReducer = combineReducers({ signalReducer, moveCarReducer })

export default rootReducer