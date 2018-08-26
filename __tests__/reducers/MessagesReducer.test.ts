import { messagesReducer } from "../../src/reducers/MessagesReducer";
import { POST_MESSAGE } from "../../src/actions/PostMessageAction";

const initialState = { messages: [] };

test("initial state", () => {
  const state = messagesReducer(undefined, {
    type: "initilalize"
  });

  expect(state).toEqual(initialState);
});

test("action = message posted => push message list", () => {
  const state = messagesReducer(initialState, {
    type: POST_MESSAGE,
    payload: {
      message: { id: 0, body: "test message" }
    }
  });

  expect(state.messages).toEqual([{ id: 0, body: "test message" }]);
});
