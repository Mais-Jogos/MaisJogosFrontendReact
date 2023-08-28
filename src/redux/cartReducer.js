import { SELECT_GAME } from './actions'; 
 
const initialState = { 
    cart:[],
}; 
 
export default function cartReducer(state = initialState, action) { 
  switch (action.type) {
      case SELECT_GAME: 
      return { 
        ...state, 
        cart: [...state.cart, action.payload],
        };
    default: 
      return state; 
  }
}