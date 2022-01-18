import {
  GET_ALLGENRES_LOADING,
  GET_ALLGENRES_SUCCESS,
  GET_ALLGENRES_FAILURE,
  ADD_GENRE_LOADING,
  ADD_GENRE_SUCCESS,
  ADD_GENRE_FAILURE,
  GET_GENRE_LOADING,
  GET_GENRE_SUCCESS,
  GET_GENRE_FAILURE,
} from "./actionType";

const initState = {
  genres: {
    loading: false,
    data: [],
    genre: {},
    error: false,
  },
};

export const genreReducer = (state = initState, { type, payload }) => {
  switch (type) {
    // GET ALL GENRES
    case GET_ALLGENRES_LOADING:
      return {
        ...state,
        genres: {
          ...state.genres,
          loading: true,
        },
      };
    case GET_ALLGENRES_SUCCESS:
      return {
        ...state,
        genres: {
          ...state.genres,
          loading: false,
          data: payload,
        },
      };
    case GET_ALLGENRES_FAILURE:
      return {
        ...state,
        genres: {
          ...state.genres,
          error: true,
        },
      };

    // ADD A GENRE
    case ADD_GENRE_LOADING:
      return {
        ...state,
        genres: {
          ...state.genres,
          loading: true,
        },
      };
    case ADD_GENRE_SUCCESS:
      return {
        ...state,
        genres: {
          ...state.songs,
          loading: false,
          genre: payload,
        },
      };
    case ADD_GENRE_FAILURE:
      return {
        ...state,
        genres: {
          ...state.genres,
          error: true,
        },
      };

    // GET A GENRE
    case GET_GENRE_LOADING:
      return {
        ...state,
        genres: {
          ...state.genres,
          loading: true,
        },
      };
    case GET_GENRE_SUCCESS:
      return {
        ...state,
        genres: {
          ...state.genres,
          loading: false,
          song: payload,
        },
      };
    case GET_GENRE_FAILURE:
      return {
        ...state,
        genres: {
          ...state.genres,
          error: true,
        },
      };

    default:
      return state;
  }
};
