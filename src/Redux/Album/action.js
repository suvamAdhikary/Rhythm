import { aAlbum, changeAlbum, loadAllAlbums, newAlbum, rmAlbum } from "../../Utils/Axios";
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
    DEBOUNCE_ALBUMS_LOADING,
    DEBOUNCE_ALBUMS_SUCCESS,
    DEBOUNCE_ALBUMS_FAILURE
}
from "./actionType";

export const getAllAlbumsLoading = () => ({ type: GET_ALLALBUMS_LOADING });
export const getAllAlbumsSuccess = (payload) => ({ type: GET_ALLALBUMS_SUCCESS, payload});
export const getAllAlbumsFailure = (payload) => ({ type: GET_ALLALBUMS_FAILURE, payload});

export const addAlbumLoading = () => ({ type: ADD_ALBUM_LOADING });
export const addAlbumSuccess = (payload) => ({ type: ADD_ALBUM_SUCCESS, payload});
export const addAlbumFailure = (payload) => ({ type: ADD_ALBUM_FAILURE, payload});

export const getAlbumLoading = () => ({ type: GET_ALBUM_LOADING });
export const getAlbumSuccess = (payload) => ({ type: GET_ALBUM_SUCCESS, payload});
export const getAlbumFailure = (payload) => ({ type: GET_ALBUM_FAILURE, payload});

export const updateAlbumLoading = () => ({ type: UPDATE_ALBUM_LOADING });
export const updateAlbumSuccess = (payload) => ({ type: UPDATE_ALBUM_SUCCESS, payload});
export const updateAlbumFailure = (payload) => ({ type: UPDATE_ALBUM_FAILURE, payload});

export const deleteAlbumLoading = () => ({ type: DELETE_ALBUM_LOADING });
export const deleteAlbumSuccess = (payload) => ({ type: DELETE_ALBUM_SUCCESS, payload});
export const deleteAlbumFailure = (payload) => ({ type: DELETE_ALBUM_FAILURE, payload});

export const debounceAlbumsLoading = () => ({ type: DEBOUNCE_ALBUMS_LOADING });
export const debounceAlbumsSuccess = (payload) => ({ type: DEBOUNCE_ALBUMS_SUCCESS, payload});
export const debounceAlbumsFailure = (payload) => ({ type: DEBOUNCE_ALBUMS_FAILURE, payload});


export const getAllAlbums = (payload) => async (dispatch) => {
    
    dispatch(getAllAlbumsLoading());
    
    try {
        
        const { data } = await loadAllAlbums(payload);

        dispatch(getAllAlbumsSuccess(data));

    }
    catch (err) {

        dispatch(getAllAlbumsFailure(err));
    };
};


export const addAlbum = (payload) => async (dispatch) => {

    dispatch(addAlbumLoading());

    try {

        const { data } = await newAlbum(payload);

        dispatch(addAlbumSuccess(data));

    }
    catch (err) {

        dispatch(addAlbumFailure(err));
    }
}


export const getAlbum = (payload) => async (dispatch) => {
    dispatch(getAlbumLoading());

    try {

        const { data } = await aAlbum(payload);

        dispatch(getAlbumSuccess(data));

    }
    catch (err) {

        dispatch(getAlbumFailure(err));
    }
}


export const updateAlbum = (payload) => async (dispatch) => {

    dispatch(updateAlbumLoading());

    try {

        const { data } = await changeAlbum(payload);

        dispatch(updateAlbumSuccess(data));

    }
    catch (err) {

        dispatch(updateAlbumFailure(err));
    }
}


export const deleteAlbum = (payload) => async (dispatch) => {

    dispatch(deleteAlbumLoading());

    try {

        const { data } = await rmAlbum(payload);

        dispatch(deleteAlbumSuccess(data));

    }
    catch (err) {

        dispatch(deleteAlbumFailure(err));
    }
}

// export const getDebounced = (payload) => async (dispatch) => {
//     dispatch(debounceAlbumsLoading());

//     try {

//         const { data: {albums} } = await debounceAlbums(payload);

//         dispatch(debounceAlbumsSuccess(albums));

//     }
//     catch (err) {

//         dispatch(debounceAlbumsFailure(err));
//     }
// }