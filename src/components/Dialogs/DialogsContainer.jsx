import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { Dialogs } from './Dialogs';

const authRedirectComponent = withAuthRedirect(Dialogs);

const MapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
  };
};

const DialogsContainer = connect(MapStateToProps, {})(authRedirectComponent);
export default DialogsContainer;