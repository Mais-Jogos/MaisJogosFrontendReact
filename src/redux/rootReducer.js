import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import cartReducer from  './cartReducer';
import coinsReducer from './coinsReducer';
import translateReducer from './translateReducer';
import userReducer from './userReducer';
import listadesejosReducer from './listadesejosReducer';
import alertReducer from './alertReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  cart: cartReducer,
  coins: coinsReducer,
  language: translateReducer,
  userRedux: userReducer,
  listadesejos: listadesejosReducer,
  alertMessage: alertReducer,
});

export default rootReducer;