import {
    GET_ALLSONGS_LOADING,
    GET_ALLSONGS_SUCCESS,
    GET_ALLSONGS_FAILURE,
    ADD_SONG_LOADING,
    ADD_SONG_SUCCESS,
    ADD_SONG_FAILURE,
    GET_SONG_LOADING,
    GET_SONG_SUCCESS,
    GET_SONG_FAILURE,
    UPDATE_SONG_LOADING,
    UPDATE_SONG_SUCCESS,
    UPDATE_SONG_FAILURE,
    DELETE_SONG_LOADING,
    DELETE_SONG_SUCCESS,
    DELETE_SONG_FAILURE
}
from "./actionType";


const initState = {
    songs: {
        loading: false,
        data: {},
        song: {},
        error: false,
    }
}

export const songReducer = (state = initState, {type, payload}) => {

    switch (type) {
        // GET ALL SONGS
        case GET_ALLSONGS_LOADING:
            return {
                ...state,
                songs: {
                    ...state.songs,
                    loading: true,
                }
            }
        case GET_ALLSONGS_SUCCESS:
            return {
                ...state,
                songs: {
                    ...state.songs,
                    loading: false,
                    data: payload,
                }
            }
        case GET_ALLSONGS_FAILURE:
            return {
                ...state,
                songs: {
                    ...state.songs,
                    error: true,
                }
            }

        // ADD A SONG
        case ADD_SONG_LOADING:
            return {
                ...state,
                songs: {
                    ...state.songs,
                    loading: true,
                }
            }
        case ADD_SONG_SUCCESS:
            return {
                ...state,
                songs: {
                    ...state.songs,
                    loading: false,
                    song: payload,    
                }
            }
        case ADD_SONG_FAILURE:
            return {
                ...state,
                songs: {
                    ...state.songs,
                    error: true,
                }
            }

        // GET A SONG
        case GET_SONG_LOADING:
            return {
                ...state,
                songs: {
                    ...state.songs,
                    loading: true,
                }
            }
        case GET_SONG_SUCCESS:
            return {
                ...state,
                songs: {
                    ...state.songs,
                    loading: false,
                    song: payload,
                }
            }
        case GET_SONG_FAILURE:
            return {
                ...state,
                songs: {
                    ...state.songs,
                    error: true,
                }
            }

        // UPDATE A SONG
        case UPDATE_SONG_LOADING:
            return {
                ...state,
                songs: {
                    ...state.songs,
                    loading: true,
                }
            }
        case UPDATE_SONG_SUCCESS:
            return {
                ...state,
                songs: {
                    ...state.songs,
                    loading: false,
                    song: payload,
                }
            }
        case UPDATE_SONG_FAILURE:
            return {
                ...state,
                songs: {
                    ...state.songs,
                    error: true,
                }
            }

        // DELETE A SONG
        case DELETE_SONG_LOADING:
            return {
                ...state,
                songs: {
                    ...state.songs,
                    loading: true,
                }
            }
        case DELETE_SONG_SUCCESS:
            return {
                ...state,
                songs: {
                    ...state.songs,
                    loading: false,
                    song: payload,
                }
            }
        case DELETE_SONG_FAILURE:
            return {
                ...state,
                songs: {
                    ...state.songs,
                    error: true,
                }
            }

    
        default:
            return state;
    }
}