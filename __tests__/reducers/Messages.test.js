import { messagesReducer } from "reducers/Messages";
import { POST_MESSAGE } from "actions/PostMessage";

const initialState = { messages: [] };

test("initial state", () => {
  const state = messagesReducer(undefined, {});

  expect(state).toEqual(initialState);
});

test("action = message posted => push message list", () => {
  const state = messagesReducer(initialState, {
    type: POST_MESSAGE,
    message: { id: 0, body: "test message" }
  });

  expect(state.messages).toEqual([{ id: 0, body: "test message" }]);
});
