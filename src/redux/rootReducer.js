import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import cartReducer from  './cartReducer';
import coinsReducer from './coinsReducer';
import translateReducer from './translateReducer';
import userReducer from './userReducer';
import listadesejosReducer from './listadesejosReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  cart: cartReducer,
  coins: coinsReducer,
  language: translateReducer,
  colorCard: userReducer,
  listadesejos: listadesejosReducer,
});

export default rootReducer;