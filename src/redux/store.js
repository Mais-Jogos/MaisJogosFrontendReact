import { createStore } from 'redux';
import themeReducer from './themeReducer';
import cartReducer from './cartReducer'
import coinsReducer from './coinsReducer';
import translateReducer from './translateReducer';
import userReducer from './userReducer';

export const store = createStore(themeReducer, cartReducer, coinsReducer, translateReducer, userReducer);