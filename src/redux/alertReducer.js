import { HIDE_ALERT, SHOW_ALERT } from "./actions";
const initialState = {
    message: null,
};
  
const alertReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SHOW_ALERT':
        return {
          ...state,
          message: action.payload,
        };
      case 'HIDE_ALERT':
        return {
          ...state,
          message: null,
        };
      default:
        return state;
    }
    console.log(state.message);
};
  
export default alertReducer;