export const POST_MESSAGE = "POST_MESSAGE";

export interface Message {
  id: number;
  body: string;
}

export interface MessageAction {
  type: string;
  payload: {
    message: Message;
  };
}

export const postMessage = (message: Message): MessageAction => {
  return {
    type: POST_MESSAGE,
    payload: {
      message
    }
  };
};
