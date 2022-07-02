import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { Dialogs } from './Dialogs';

const MapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
  };
};

export default compose(connect(MapStateToProps, {}),
  withAuthRedirect)(Dialogs);;