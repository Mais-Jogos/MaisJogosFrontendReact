import { SELECT_GAME, DELETE_GAME, HIDE_ALERT } from './actions'; 
 
const initialState = { 
    cart:[],
    message:null,
}; 
 
export default function cartReducer(state = initialState, action) { 
  switch (action.type) {
    case SELECT_GAME: 
    console.log(action);
      return { 
        ...state, 
        cart: [...state.cart, action.payload],
        message: action.message,
      };
      case DELETE_GAME: 
      return { 
        ...state, 
        cart: state.cart.filter(game => game !== action.payload),
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