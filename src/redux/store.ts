import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk, { ThunkAction, ThunkMiddleware } from "redux-thunk";
import chatReducer from "./reducers/chatReducer";
import loginReducer from "./reducers/LoginReducer";


const reducer = combineReducers({
    login: loginReducer,
    chat: chatReducer
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose || compose;
const store = createStore(reducer,
    composeEnhancers(applyMiddleware(
        thunk as ThunkMiddleware<RootState, AppActions>,
    )),
);

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
export type AppActions = Parameters<typeof reducer>[1];
export type ThunkResult<R> = ThunkAction<R, RootState, undefined, AppActions>;

export default store;
