import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { actionsDialogs } from "src/redux/dialogsReduser";
import module from "../Dialogs.module.css";

export const NewMessage: FC = () => {
  const dispatch = useDispatch();

  const onSubmit = (formData: { message: string }) => {
    dispatch(actionsDialogs.sendNewMessage(formData.message));
    formData.message = "";
  };

  return (
    <div className={module.newMessage}>
      <NewMessageReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const NewMessageForm: any = (props: any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder="Enter your message"
        name="message"
        component="textarea"
        autoFocus
        cols="50"
        rows="4"
        className={module.messageTextarea}
      />
      <button className={module.submitMessage}>Send</button>
    </form>
  );
};

const NewMessageReduxForm: any = reduxForm({
  form: "dialogAddNewMessageForm",
})(NewMessageForm);
