import { connect } from 'react-redux';
import { updateTextMessageActionCreator, sendNewMessageActionCreator } from '../../../redux/dialogsReduser';
import { NewMessage } from './NewMessage';

const MapStateToProps = (state) => {
  return {
    newMessage: state.dialogsPage.newMessage,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    updateTextMessage: (message) => dispatch(updateTextMessageActionCreator(message)),
    sendNewMessage: () => dispatch(sendNewMessageActionCreator()),
  };
};

const NewMessageContainer = connect(MapStateToProps, MapDispatchToProps)(NewMessage);
export default NewMessageContainer;