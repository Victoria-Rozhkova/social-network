import { connect } from 'react-redux';
import { Dialogs } from './Dialogs';

const MapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    isAuth: state.auth.isAuth
  };
};

const DialogsContainer = connect(MapStateToProps, {})(Dialogs);
export default DialogsContainer;