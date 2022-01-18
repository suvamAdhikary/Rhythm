import {
    GET_ALLALBUMS_LOADING,
    GET_ALLALBUMS_SUCCESS,
    GET_ALLALBUMS_FAILURE,
    ADD_ALBUM_LOADING,
    ADD_ALBUM_SUCCESS,
    ADD_ALBUM_FAILURE,
    GET_ALBUM_LOADING,
    GET_ALBUM_SUCCESS,
    GET_ALBUM_FAILURE,
    UPDATE_ALBUM_LOADING,
    UPDATE_ALBUM_SUCCESS,
    UPDATE_ALBUM_FAILURE,
    DELETE_ALBUM_LOADING,
    DELETE_ALBUM_SUCCESS,
    DELETE_ALBUM_FAILURE,
    // DEBOUNCE_ALBUMS_LOADING,
    // DEBOUNCE_ALBUMS_SUCCESS,
    // DEBOUNCE_ALBUMS_FAILURE
}
from "./actionType";


const initState = {
    albums: {
        loading: false,
        data: {},
        album: {},
        // debounced: {
        //     loading: false,
        //     data: [],
        //     error: false,
        // },
        error: false,
    }
}

export const albumReducer = (state = initState, {type, payload}) => {

    switch (type) {
        // GET ALL ALBUMS
        case GET_ALLALBUMS_LOADING:
            return {
                ...state,
                albums: {
                    ...state.albums,
                    loading: true,
                }
            }
        case GET_ALLALBUMS_SUCCESS:
            return {
                ...state,
                albums: {
                    ...state.albums,
                    loading: false,
                    data: payload,
                }
            }
        case GET_ALLALBUMS_FAILURE:
            return {
                ...state,
                albums: {
                    ...state.albums,
                    error: true,
                }
            }

        // ADD AN ALBUM
        case ADD_ALBUM_LOADING:
            return {
                ...state,
                albums: {
                    ...state.albums,
                    loading: true,
                }
            }
        case ADD_ALBUM_SUCCESS:
            return {
                ...state,
                albums: {
                    ...state.albums,
                    loading: false,
                    album: payload,    
                }
            }
        case ADD_ALBUM_FAILURE:
            return {
                ...state,
                albums: {
                    ...state.albums,
                    error: true,
                }
            }

        // GET AN ALBUM
        case GET_ALBUM_LOADING:
            return {
                ...state,
                albums: {
                    ...state.albums,
                    loading: true,
                }
            }
        case GET_ALBUM_SUCCESS:
            return {
                ...state,
                albums: {
                    ...state.albums,
                    loading: false,
                    album: payload,
                }
            }
        case GET_ALBUM_FAILURE:
            return {
                ...state,
                albums: {
                    ...state.albums,
                    error: true,
                }
            }

        // UPDATE AN ALBUM
        case UPDATE_ALBUM_LOADING:
            return {
                ...state,
                albums: {
                    ...state.albums,
                    loading: true,
                }
            }
        case UPDATE_ALBUM_SUCCESS:
            return {
                ...state,
                albums: {
                    ...state.albums,
                    loading: false,
                    album: payload,
                }
            }
        case UPDATE_ALBUM_FAILURE:
            return {
                ...state,
                albums: {
                    ...state.albums,
                    error: true,
                }
            }

        // DELETE AN ALBUM
        case DELETE_ALBUM_LOADING:
            return {
                ...state,
                albums: {
                    ...state.albums,
                    loading: true,
                }
            }
        case DELETE_ALBUM_SUCCESS:
            return {
                ...state,
                albums: {
                    ...state.albums,
                    loading: false,
                    album: payload,
                }
            }
        case DELETE_ALBUM_FAILURE:
            return {
                ...state,
                albums: {
                    ...state.albums,
                    error: true,
                }
            }

        // DEBOUNCE
        // case DEBOUNCE_ALBUMS_LOADING:
        //     return {
        //         ...state,
        //         albums: {
        //             ...state.albums,
        //             debounced: {
        //                 ...state.albums.debounced,
        //                 loading: true,
        //             }
        //         }
        //     }
        // case DEBOUNCE_ALBUMS_SUCCESS:
        //     return {
        //         ...state,
        //         albums: {
        //             ...state.albums,
        //             debounced: {
        //                 ...state.albums.debounced,
        //                 loading: true,
        //                 data: payload,
        //             }
        //         }
        //     }
        // case DEBOUNCE_ALBUMS_FAILURE:
        //     return {
        //         ...state,
        //         albums: {
        //             ...state.albums,
        //             debounced: {
        //                 ...state.albums.debounced,
        //                 error: true,
        //             }
        //         }
        //     }

    
        default:
            return state;
    }
}