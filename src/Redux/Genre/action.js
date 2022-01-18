import { aGenre, loadAllGenres, newGenre } from "../../Utils/Axios";
import {
    GET_ALLGENRES_LOADING,
    GET_ALLGENRES_SUCCESS,
    GET_ALLGENRES_FAILURE,
    ADD_GENRE_LOADING,
    ADD_GENRE_SUCCESS,
    ADD_GENRE_FAILURE,
    GET_GENRE_LOADING,
    GET_GENRE_SUCCESS,
    GET_GENRE_FAILURE
}
from "./actionType";

export const getAllGenresLoading = () => ({ type: GET_ALLGENRES_LOADING });
export const getAllGenresSuccess = (payload) => ({ type: GET_ALLGENRES_SUCCESS, payload});
export const getAllGenresFailure = (payload) => ({ type: GET_ALLGENRES_FAILURE, payload});

export const addGenreLoading = () => ({ type: ADD_GENRE_LOADING });
export const addGenreSuccess = (payload) => ({ type: ADD_GENRE_SUCCESS, payload});
export const addGenreFailure = (payload) => ({ type: ADD_GENRE_FAILURE, payload});

export const getGenreLoading = () => ({ type: GET_GENRE_LOADING });
export const getGenreSuccess = (payload) => ({ type: GET_GENRE_SUCCESS, payload});
export const getGenreFailure = (payload) => ({ type: GET_GENRE_FAILURE, payload});


export const getAllGenres = (payload) => async (dispatch) => {

    dispatch(getAllGenresLoading());

    try {

        const { data } = await loadAllGenres(payload);

        dispatch(getAllGenresSuccess(data));

    }
    catch (err) {

        dispatch(getAllGenresFailure(err));
    };
};


export const addGenre = (payload) => async (dispatch) => {

    dispatch(addGenreLoading());

    try {

        const { data } = await newGenre(payload);

        dispatch(addGenreSuccess(data));

    }
    catch (err) {

        dispatch(addGenreFailure(err));
    }
}

export const getGenre = (payload) => async (dispatch) => {

    dispatch(getGenreLoading());

    try {

        const { data } = await aGenre(payload);

        dispatch(getGenreSuccess(data));

    }
    catch (err) {

        dispatch(getGenreFailure(err));
    }
}