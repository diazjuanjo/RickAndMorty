import {
    GET_CHARACTER_DETAIL,
    GET_CHARACTERS,
    CLEAR_PAGE,
    ADD_FAVORITE,
    REMOVE_FAVORITE,
} from './actionTypes';

import axios from 'axios';

export function getCharacters() {
    return dispatch => {
        return axios.get(`https://rickandmortyapi.com/api/character`)
            .then(res => dispatch({ type: GET_CHARACTERS, payload: res.data.results }))
            .catch((error) => {
                console.log(error)
            })   
    }
}
export function getCharactersDetail(id) {
    return dispatch => {
        return fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => res.json())
            .then(json => { dispatch({ type: GET_CHARACTER_DETAIL, payload: json })
            .catch((error) => {
                console.log(error)
            })
            });
    };
}

export function clearPage(){
    return {
        type: CLEAR_PAGE
    }
}

export function addFavorite(payload) {
    return { 
        type: ADD_FAVORITE, 
        payload 
    };
}

export function removeFavorite(id) {
    return { 
        type: REMOVE_FAVORITE, 
        payload: id 
    };
}
