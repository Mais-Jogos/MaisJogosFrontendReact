import { createStore } from 'redux';
import themeReducer from './themeReducer';
import cartReducer from './cartReducer'

export const store = createStore(themeReducer, cartReducer);