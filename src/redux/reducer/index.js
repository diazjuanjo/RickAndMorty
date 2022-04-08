import {
    GET_CHARACTERS,
    GET_CHARACTER_DETAIL,
    ADD_FAVORITE,
    REMOVE_FAVORITE,
    CLEAR_PAGE,
} from '../actions/actionTypes';

const initialState = {
    characters: [],
    characterDetail: [],
    favoriteCharacters: [],
};

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_CHARACTERS:
            return {
                ...state,
                characters: payload,
            };

        case GET_CHARACTER_DETAIL:
            return {
                ...state,
                characterDetail: payload,
            };

        case CLEAR_PAGE:
            return {
                ...state,
                characterDetail: {}
            }

        case ADD_FAVORITE:
            return {
                ...state,               
                favoriteCharacters: state.favoriteCharacters.find(character => character.id === payload.id)
                ?[...state.favoriteCharacters]
                :[...state.favoriteCharacters, payload]
            };

        case REMOVE_FAVORITE: 
            return {
                ...state,
                favoriteCharacters: state.favoriteCharacters.filter(character => character.id !== payload)
            }

        default:
            return state;
    }
}
