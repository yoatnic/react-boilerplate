import AppRouter from "../AppRouter";
import { postMessage } from "../actions/PostMessage";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMessagePosted(value) {
      dispatch(postMessage(value));
    }
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppRouter);
export default AppContainer;
