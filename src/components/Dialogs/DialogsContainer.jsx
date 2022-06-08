import { connect } from 'react-redux';
import { Dialogs } from './Dialogs';

const MapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    state: state,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {};
};

const DialogsContainer = connect(MapStateToProps, MapDispatchToProps)(Dialogs);
export default DialogsContainer;