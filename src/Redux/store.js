import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { albumReducer } from "./Album/reducer";
import { artistReducer } from "./Artist/reducer";
import { genreReducer } from "./Genre/reducer";
import { songReducer } from "./Song/reducer";

const rootReducer = combineReducers({
    artist: artistReducer,
    album: albumReducer,
    song: songReducer,
    genre: genreReducer,
});

const composeEnhancers = (
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__
) || compose;

const enhancer = composeEnhancers(applyMiddleware(
    thunk
));

export const store = createStore(
    rootReducer,

    enhancer,
);