import { LoginArtist, updateArtistData } from "../../Utils/Axios";
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

export const logArtistLoading = () => ({ type: LOG_ARTIST_LOADING });
export const logArtistSuccess = (payload) => ({ type: LOG_ARTIST_SUCCESS, payload});
export const logArtistFailure = (payload) => ({ type: LOG_ARTIST_FAILURE, payload});



export const updateArtistLoading = () => ({ type: UPDATE_ARTIST_LOADING });
export const updateArtistSuccess = (payload) => ({ type: UPDATE_ARTIST_SUCCESS, payload});
export const updateArtistFailure = (payload) => ({ type: UPDATE_ARTIST_FAILURE, payload});


export const logoutArtistLoading = () => ({ type: LOGOUT_ARTIST_LOADING });
export const logoutArtistSuccess = (payload) => ({ type: LOGOUT_ARTIST_SUCCESS, payload});
export const logoutArtistFailure = (payload) => ({ type: LOGOUT_ARTIST_FAILURE, payload});


export const logArtist = (payload) => async (dispatch) => {

    dispatch(logArtistLoading());

    try{

        const { data } = await LoginArtist(payload);

        dispatch(logArtistSuccess(data));

    }
    catch (err) {
        dispatch(logArtistFailure(err));
    }
};

export const updateArtist = ({id, payload}) => async (dispatch) => {

    dispatch(updateArtistLoading());

    try{
        console.log(id, payload);
        const { data } = await updateArtistData(id, payload);

        dispatch(updateArtistSuccess(data));

    }
    catch (err) {
        dispatch(updateArtistFailure(err));
    }
};

export const logoutArtist = () => async (dispatch) => {

    dispatch(logoutArtistLoading());

    try{

        dispatch(logoutArtistSuccess());

    }
    catch (err) {
        dispatch(logoutArtistFailure(err));
    }
};