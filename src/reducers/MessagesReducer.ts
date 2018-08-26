import {
  POST_MESSAGE,
  Message,
  MessageAction
} from "../actions/PostMessageAction";

export interface State {
  messages: Array<Message>;
}

const initinalState: State = {
  messages: []
};

export const messagesReducer = (
  state: State = initinalState,
  action: MessageAction | any
): State => {
  switch (action.type) {
    case POST_MESSAGE:
      const newState: State = (<any>Object).assign({}, state, {
        messages: [...state.messages, action.payload.message]
      });
      return newState;
    default:
      return state;
  }
};
