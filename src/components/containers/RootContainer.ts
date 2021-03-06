import { connect } from "react-redux";
import AppRouter from "../../AppRouter";
import { postMessage } from "../../actions/PostMessageAction";
import { State } from "../../reducers/MessagesReducer";

const mapStateToProps = (state: State): State => {
  return {
    messages: state.messages
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  let messageId: number = 0;
  return {
    onMessagePosted(messageStr: string): void {
      dispatch(
        postMessage({
          id: messageId++,
          body: messageStr
        })
      );
    }
  };
};

const RootContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
export default RootContainer;
