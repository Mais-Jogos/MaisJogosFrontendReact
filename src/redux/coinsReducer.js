import { ADD_COINS, HIDE_ALERT } from "./actions";

const initialState = {
    coins: 0,
    message:null,
}

export default function coinsReducer(state = initialState, action) { 
    switch (action.type) { 
      case ADD_COINS: 
        return { 
          ...state, 
          coins: state.coins + action.payload,
          message: action.message,
        };
      case HIDE_ALERT:
        return {
          ...state,
          message: null,
        };
      default:
        return state;
    }
}