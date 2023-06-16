import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "../reducers/profilePageReducer";
import {messagesPageReducer} from "../reducers/messagesPageReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
  profilePageReducer,
  messagesPageReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());
