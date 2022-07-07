import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import module from '../Dialogs.module.css';

export const NewMessage = (props) => {

  const sendNewMessage = (formData) => {
    props.sendNewMessage(formData.message);
    formData.message = "";
  };

  return (
    <div className={module.newMessage}>
      <NewMessageReduxForm onSubmit={sendNewMessage} />
    </div>
  );
};

const NewMessageForm = (props) => {

  return <form onSubmit={props.handleSubmit}>
    <Field placeholder='Enter your message' name='message' component="textarea" autoFocus cols="30" rows="4" className={module.messageTextarea} />
    <button className={module.submitMessage}>Send</button>
  </form>;
};

const NewMessageReduxForm = reduxForm({
  form: 'dialogAddNewMessageForm',
})(NewMessageForm);