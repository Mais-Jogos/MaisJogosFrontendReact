import { FAVORITE_GAME, DELETEFAVORITE_GAME } from './actions'; 
 
const initialState = { 
    listadesejos:[],
}; 
 
export default function listadesejosReducer(state = initialState, action) { 
  switch (action.type) {
      case FAVORITE_GAME: 
      return { 
        ...state, 
        listadesejos: [...state.listadesejos, action.payload],
        };
      case DELETEFAVORITE_GAME: 
      return { 
        ...state, 
        listadesejos: state.listadesejos.filter(game => game !== action.payload),
        };
    default: 
      return state; 
  }
}