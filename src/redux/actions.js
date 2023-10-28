export const CHANGE_THEME = 'CHANGE_THEME';
export const CONTRAST_THEME = 'CONTRAST_THEME';
export const OFF_CONTRAST_THEME = 'OFF_CONTRAST_THEME';
export const SELECT_GAME = 'SELECT_GAME';
export const DELETE_GAME = 'DELETE_GAME';
export const FAVORITE_GAME = 'FAVORITE_GAME';
export const DELETEFAVORITE_GAME = 'DELETEFAVORITE_GAME';
export const ADD_COINS = 'ADD_COINS';
export const BUYWITH_COINS = 'BUYWITH_COINS';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const CHANGE_COLORCARD = 'CHANGE_COLORCARD';
export const CHANGE_AVATAR = 'CHANGE_AVATAR';
export const ADD_AVATAR = 'ADD_AVATAR';
export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';
 
export function changeColorCard(color) { 
  return { 
    type: CHANGE_COLORCARD,
    payload: color,
  };
}
export function changeAvatar(avatar) {
  return {
    type: CHANGE_AVATAR,
    payload: avatar
  }
}
export function addAvatar(avatar) {
  return {
    type: ADD_AVATAR,
    payload: avatar,
    message:`Você comprou ${avatar?.nome}`
  }
}
export function addCoins(coins) {
  return{ 
    type: ADD_COINS,
    payload: coins,
    message:`Você ganhou ${coins} kapicoins`,
  }
}
export function buyWithCoins(coins) {
  return{ 
    type: BUYWITH_COINS,
    payload: coins,
    message:`Você gastou ${coins} kapicoins`,
  }
}
export function changeLanguage(language) { 
  return { 
    type: CHANGE_LANGUAGE,
    payload: language
  };
}
export function showAlert(message) { 
  return { 
    type: SHOW_ALERT,
    payload: message,
  };
}
export function hideAlert() { 
  return { 
    type: HIDE_ALERT,
  };
}
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
  return{ 
    type: SELECT_GAME,
    payload: game,
    message:"Você adicionou um jogo do carrinho",
  }
}
export function deleteGame(game) {
  return { 
    type: DELETE_GAME,
    payload: game,
    message:"Você removeu um jogo do carrinho"
  };
}
export function favoriteGame(game) { 
  return { 
    type: FAVORITE_GAME,
    payload: game,
    message:"Você adicionou um jogo a lista de desejos",
  }
}
export function deletefavoriteGame(game) {
  return{ 
    type: DELETEFAVORITE_GAME,
    payload: game,
    message:"Você removeu um jogo a lista de desejos",
  }
}