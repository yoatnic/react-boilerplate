export const POST_MESSAGE = "POST_MESSAGE";

export const postMessage = message => {
  return { type: POST_MESSAGE, message };
};
