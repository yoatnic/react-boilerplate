export const POST_MESSAGE = "POST_MESSAGE";

export function postMessage(message) {
  return { type: POST_MESSAGE, message };
}
