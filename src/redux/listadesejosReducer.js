import { FAVORITE_GAME, DELETEFAVORITE_GAME, HIDE_ALERT } from './actions'; 
 
const initialState = { 
    listadesejos:[],
    message:null,
}; 
 
export default function listadesejosReducer(state = initialState, action) { 
  switch (action.type) {
      case FAVORITE_GAME: 
      return { 
        ...state, 
        listadesejos: [...state.listadesejos, action.payload],
        message: action.message,
      };
      case DELETEFAVORITE_GAME: 
      return { 
        ...state, 
        listadesejos: state.listadesejos.filter(game => game !== action.payload),
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