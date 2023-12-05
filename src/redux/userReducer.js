import { CHANGE_COLORCARD, CHANGE_AVATAR, ADD_AVATAR, HIDE_ALERT } from './actions'; 
import Axios from "axios"
 
const initialState = { 
  colorCard: '#000',
  avatar:{
    nome: "Rochinha",
    arquivo:"/imgs/animais/5.png",
    valor: 0,
    id:0,
  },
  avatares:[
    {
      nome: "Rochinha",
      arquivo:"/imgs/animais/5.png",
      valor: 0,
      id:1,
    },
  ],
  message:null,
}; 
 
export default function userReducer(state = initialState, action) { 
  switch (action.type) {
      case CHANGE_COLORCARD: 
        return { 
          ...state, 
          colorCard: action.colorCard,
        };
      case CHANGE_AVATAR: 
        return { 
          ...state, 
          avatar: action.payload,
        };
      case ADD_AVATAR:
        console.log("payload",action);
        return {
          ...state,
          avatares: [...state.avatares, action.payload],
          message:action.message,
        }
      case HIDE_ALERT:
        return {
          ...state,
          message: null,
        };
      default: 
        return state; 
  }
}