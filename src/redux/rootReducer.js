import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import cartReducer from  './cartReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  cart: cartReducer,
});

export default rootReducer;