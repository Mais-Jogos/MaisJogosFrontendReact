import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import cartReducer from  './cartReducer';
import coinsReducer from './coinsReducer';
import translateReducer from './translateReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  cart: cartReducer,
  coins: coinsReducer,
  language: translateReducer,
  colorCard: userReducer,
});

export default rootReducer;