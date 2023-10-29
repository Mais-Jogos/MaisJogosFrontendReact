import { CHANGE_COLORCARD, CHANGE_AVATAR, ADD_AVATAR } from './actions'; 
 
const initialState = { 
  colorCard: '#000',
  avatar:{
    nome: "Rochinha",
    img:"/imgs/animais/5.png",
    color:"red",
    coins:500,
    id:5,
  },
  avatares:[
    {
      nome: "Rochinha",
      img:"/imgs/animais/5.png",
      color:"red",
      coins:500,
      id:5,
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
      default: 
        return state; 
  }
}