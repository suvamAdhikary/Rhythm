import { aSong, changeSong, loadAllSongs, newSong, rmSong } from "../../Utils/Axios";
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

export const getAllSongsLoading = () => ({ type: GET_ALLSONGS_LOADING });
export const getAllSongsSuccess = (payload) => ({ type: GET_ALLSONGS_SUCCESS, payload});
export const getAllSongsFailure = (payload) => ({ type: GET_ALLSONGS_FAILURE, payload});
export const addSongLoading = () => ({ type: ADD_SONG_LOADING });
export const addSongSuccess = (payload) => ({ type: ADD_SONG_SUCCESS, payload});
export const addSongFailure = (payload) => ({ type: ADD_SONG_FAILURE, payload});

export const getSongLoading = () => ({ type: GET_SONG_LOADING });
export const getSongSuccess = (payload) => ({ type: GET_SONG_SUCCESS, payload});
export const getSongFailure = (payload) => ({ type: GET_SONG_FAILURE, payload});

export const updateSongLoading = () => ({ type: UPDATE_SONG_LOADING });
export const updateSongSuccess = (payload) => ({ type: UPDATE_SONG_SUCCESS, payload});
export const updateSongFailure = (payload) => ({ type: UPDATE_SONG_FAILURE, payload});

export const deleteSongLoading = () => ({ type: DELETE_SONG_LOADING });
export const deleteSongSuccess = (payload) => ({ type: DELETE_SONG_SUCCESS, payload});
export const deleteSongFailure = (payload) => ({ type: DELETE_SONG_FAILURE, payload});


export const getAllSongs = (payload) => async (dispatch) => {

    dispatch(getAllSongsLoading());

    try {

        const { data } = await loadAllSongs(payload);

        dispatch(getAllSongsSuccess(data));

    }
    catch (err) {

        dispatch(getAllSongsFailure(err));
    };
};


export const addSong = (payload) => async (dispatch) => {

    dispatch(addSongLoading());

    try {

        const { data } = await newSong(payload);

        dispatch(addSongSuccess(data));

    }
    catch (err) {

        dispatch(addSongFailure(err));
    }
}


export const getSong = (payload) => async (dispatch) => {

    dispatch(getSongLoading());

    try {

        const { data } = await aSong(payload);

        dispatch(getSongSuccess(data));

    }
    catch (err) {

        dispatch(getSongFailure(err));
    }
}


export const updateSong = (payload) => async (dispatch) => {

    dispatch(updateSongLoading());

    try {

        const { data } = await changeSong(payload);

        dispatch(updateSongSuccess(data));

    }
    catch (err) {

        dispatch(updateSongFailure(err));
    }
}


export const deleteSong = (payload) => async (dispatch) => {

    dispatch(deleteSongLoading());

    try {

        const { data } = await rmSong(payload);

        dispatch(deleteSongSuccess(data));

    }
    catch (err) {

        dispatch(deleteSongFailure(err));
    }
}