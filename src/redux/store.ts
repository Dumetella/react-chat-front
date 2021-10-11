import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import chatReducer from "./reducers/chatReducer";
import loginReducer from "./reducers/LoginReducer";


const reducer = combineReducers({
    login: loginReducer,
    chat: chatReducer
});

const store = createStore(reducer, applyMiddleware(thunk));


export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;

export default store;