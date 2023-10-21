import { CHANGE_COLORCARD } from './actions'; 
 
const initialState = { 
  colorCard: '#000',
}; 
 
export default function userReducer(state = initialState, action) { 
  switch (action.type) {
      case CHANGE_COLORCARD: 
        return { 
          ...state, 
          colorCard: action.colorCard,
        };
    default: 
      return state; 
  }
}