import {
    LOG_ARTIST_SUCCESS,
    LOG_ARTIST_FAILURE,
    LOG_ARTIST_LOADING,
    UPDATE_ARTIST_LOADING,
    UPDATE_ARTIST_SUCCESS,
    UPDATE_ARTIST_FAILURE
} 
from "./actionType";


const initState = {
    artist: {
        loading: false,
        data: {},
        token: null,
        error: false,
    }
}

export const artistReducer = (state = initState, {type, payload}) => {

    switch(type) {
        // ARTIST LOGIN
        case LOG_ARTIST_LOADING:
            return {
                ...state,
                artist: {
                    ...state.artist,
                    loading: true,
                }
            }
        case LOG_ARTIST_SUCCESS:
            return {
                ...state,
                artist: {
                    ...state.artist,
                    loading: false,
                    token: payload.token,
                }
            }
        case LOG_ARTIST_FAILURE:
            return {
                ...state,
                artist: {
                    ...state.artist,
                    error: true,
                }
            }

        // ARTIST UPDATE
        case UPDATE_ARTIST_LOADING:
            return {
                ...state,
                artist: {
                    ...state.artist,
                    loading: true,
                }
            }
        case UPDATE_ARTIST_SUCCESS:
            return {
                ...state,
                artist: {
                    ...state.artist,
                    loading: false,
                    data: payload,
                }
            }
        case UPDATE_ARTIST_FAILURE:
            return {
                ...state,
                artist: {
                    ...state.artist,
                    error: true,
                }
            }


        default:
            return state;
    }
}