export const CHANGE_THEME = 'CHANGE_THEME';
export const CONTRAST_THEME = 'CONTRAST_THEME';
export const OFF_CONTRAST_THEME = 'OFF_CONTRAST_THEME';
export const SELECT_GAME = 'SELECT_GAME';
export const DELETE_GAME = 'DELETE_GAME';
 
export function changeTheme() { 
  return { 
    type: CHANGE_THEME,
  };
}
export function contrastTheme() { 
  return { 
    type: CONTRAST_THEME,
  };
}
export function offContrastTheme() { 
  return { 
    type: OFF_CONTRAST_THEME,
  };
}
export function selectGame(game) { 
  return { 
    type: SELECT_GAME,
    payload: game
  };
}
export function deleteGame(game) {
  return { 
    type: DELETE_GAME,
    payload: game
  };
}