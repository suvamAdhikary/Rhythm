import { loadData, saveData } from "../../Utils/localStorage";
import {
    LOG_ARTIST_SUCCESS,
    LOG_ARTIST_FAILURE,
    LOG_ARTIST_LOADING,
    UPDATE_ARTIST_LOADING,
    UPDATE_ARTIST_SUCCESS,
    UPDATE_ARTIST_FAILURE,
    LOGOUT_ARTIST_LOADING,
    LOGOUT_ARTIST_SUCCESS,
    LOGOUT_ARTIST_FAILURE
} 
from "./actionType";


let artistKey = loadData('rhythm-artist-token');

const initState = {
    artist: {
        loading: false,
        data: {},
        token: artistKey,
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
            saveData('rhythm-artist-token', payload.token);
            saveData('rhythm-artist-id', payload.artist._id);
            return {
                ...state,
                artist: {
                    ...state.artist,
                    loading: false,
                    token: payload.token,
                    data: payload.artist,
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

        // LOGOUT
        case LOGOUT_ARTIST_LOADING:

            return {
                ...state,
                artist: {
                    ...state.artist,
                    loading: true,
                }
            }
        case LOGOUT_ARTIST_SUCCESS:
            saveData('rhythm-artist-token', null);
            saveData('rhythm-artist-id', null);
            artistKey = loadData('rhythm-artist-token');

            return {
                ...state,
                artist: {
                    ...state.artist,
                    loading: false,
                    token: artistKey,
                    data: {},
                }
            }
        case LOGOUT_ARTIST_FAILURE:
            console.log("fail", payload);
            return {
                ...state,
                artist: {
                    ...state.artist,
                    error: false,
                }
            }
        


        default:
            return state;
    }
}
