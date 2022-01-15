import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { artistReducer } from "./Artist/reducer";

const rootReducer = combineReducers({
    artist: artistReducer,
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