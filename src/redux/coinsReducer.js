import { ADD_COINS } from "./actions";

const initialState = {
    coins: 0,
}

export default function coinsReducer(state = initialState, action) { 
    switch (action.type) { 
      case ADD_COINS: 
        return { 
          ...state, 
          coins: state.coins + action.payload,
        };
      default:
        return state;
    }
}