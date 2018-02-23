import { createStore } from "redux";
import { messagesReducer } from "./reducers/Messages";

export const store = createStore(messagesReducer);
