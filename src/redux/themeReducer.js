import { CHANGE_THEME, CONTRAST_THEME, OFF_CONTRAST_THEME } from './actions'; 
 
const initialState = { 
    theme:'dark',
    beforeContrast: null,
}; 
 
export default function themeReducer(state = initialState, action) { 
  switch (action.type) { 
    case CHANGE_THEME: 
      return { 
        ...state, 
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    case CONTRAST_THEME: 
      return { 
        ...state, 
        beforeContrast: state.theme,
        theme: state.theme = 'contrast',
      };
    case OFF_CONTRAST_THEME: 
      return { 
        ...state, 
        theme: state.theme = state.beforeContrast,
        beforeContrast: null,
      };
    default: 
      return state; 
  }
}