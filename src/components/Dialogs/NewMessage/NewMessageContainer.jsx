import { connect } from 'react-redux';
import { actionsDialogs } from '../../../redux/dialogsReduser.ts';
import { NewMessage } from './NewMessage';

const MapStateToProps = (state) => {
  return {};
};

const NewMessageContainer = connect(MapStateToProps, {
  sendNewMessage: actionsDialogs.sendNewMessage,
})(NewMessage);
export default NewMessageContainer;