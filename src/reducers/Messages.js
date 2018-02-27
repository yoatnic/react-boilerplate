import { POST_MESSAGE } from "../actions/PostMessage";

const initinalState = {
  messages: []
};

export const messagesReducer = (state = initinalState, action) => {
  switch (action.type) {
  case POST_MESSAGE:
    return Object.assign({}, state, {
      messages: [...state.messages, action.message]
    });
  default:
    return state;
  }
};
