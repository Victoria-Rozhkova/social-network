import { connect } from 'react-redux';
import { compose } from 'redux';
import { dialogsSelector, messagesSelector } from 'src/redux/selectors/dialogsSelectors';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { Dialogs } from './Dialogs';

const MapStateToProps = (state) => {
  return {
    dialogs: dialogsSelector(state),
    messages: messagesSelector(state),
  };
};

export default compose(connect(MapStateToProps, {}),
  withAuthRedirect)(Dialogs);;