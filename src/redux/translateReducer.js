import { CHANGE_LANGUAGE } from './actions'

const initialState = {
    language: 'pt',
    message:null,
}

export default function translateReducer(state = initialState, action){
    switch(action.type){
        case CHANGE_LANGUAGE:
            return { 
                ...state, 
                language: action.payload,
              };
        default:
            return state;
    }
}