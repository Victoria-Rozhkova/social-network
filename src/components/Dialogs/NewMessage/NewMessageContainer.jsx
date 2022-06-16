import { connect } from 'react-redux';
import { updateTextMessage, sendNewMessage } from '../../../redux/dialogsReduser';
import { NewMessage } from './NewMessage';

const MapStateToProps = (state) => {
  return {
    newMessage: state.dialogsPage.newMessage,
  };
};

const NewMessageContainer = connect(MapStateToProps, {
  updateTextMessage,
  sendNewMessage,
})(NewMessage);
export default NewMessageContainer;