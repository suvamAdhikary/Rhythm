import {
    LOG_ARTIST_SUCCESS,
    LOG_ARTIST_FAILURE,
    LOG_ARTIST_LOADING,
    UPDATE_ARTIST_LOADING,
    UPDATE_ARTIST_SUCCESS,
    UPDATE_ARTIST_FAILURE
} 
from "./actionType";

// const artistToken = JSON.parse(localStorage.getItem('rhythm-artist-token'));

// let artistData;

// const loadArtist = async (artistId) => {

//     const { data } = await axios.post

// }

// const initState = {
//     artist: {
//         loading: false,
//         data: {},
//         error: false,
//     }
// }

const initState = {
    artist: {
        loading: false,
        data: {},
        token: "",
        error: false,
    }
}

export const artistReducer = (state = initState, {type, payload}) => {

    switch(type) {
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


        default:
            return state;
    }
}