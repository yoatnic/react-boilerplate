import AppRouter from "../../AppRouter";
import { postMessage } from "../../actions/PostMessage";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

const mapDispatchToProps = dispatch => {
  let messageId = 0;
  return {
    onMessagePosted(messageStr) {
      dispatch(
        postMessage({
          id: messageId++,
          body: messageStr
        })
      );
    }
  };
};

const RootContainer = connect(mapStateToProps, mapDispatchToProps)(AppRouter);
export default RootContainer;
