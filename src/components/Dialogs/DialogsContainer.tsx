import { connect } from "react-redux";
import { compose } from "redux";
import { actionsDialogs } from "src/redux/dialogsReduser";
import {
  dialogsSelector,
  messagesSelector,
} from "src/redux/selectors/dialogsSelectors";
import { AppStateType } from "src/redux/store-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { Dialogs } from "./Dialogs";

const MapStateToProps = (state: AppStateType) => {
  return {
    dialogs: dialogsSelector(state),
    messages: messagesSelector(state),
  };
};

export default compose<React.ComponentType>(
  connect(MapStateToProps, { sendNewMessage: actionsDialogs.sendNewMessage }),
  withAuthRedirect
)(Dialogs);
