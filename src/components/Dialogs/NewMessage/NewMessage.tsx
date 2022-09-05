import React, { FC } from "react";
import { Field, reduxForm } from "redux-form";
import module from "../Dialogs.module.css";

type PropsType = {
  sendNewMessage: (msg: string) => void;
};

export const NewMessage: FC<PropsType> = (props) => {
  const onSubmit = (formData: { message: string }) => {
    props.sendNewMessage(formData.message);
    formData.message = "";
  };

  return (
    <div className={module.newMessage}>
      <NewMessageReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const NewMessageForm : any= (props:any) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder="Enter your message"
        name="message"
        component="textarea"
        autoFocus
        cols="30"
        rows="4"
        className={module.messageTextarea}
      />
      <button className={module.submitMessage}>Send</button>
    </form>
  );
};

const NewMessageReduxForm :any = reduxForm({
  form: "dialogAddNewMessageForm",
})(NewMessageForm);
