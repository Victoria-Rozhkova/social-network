import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";

import { actionsDialogs } from "@/redux/dialogs.reducer";
import module from "@/components/dialogs/dialogs.module.css";

export const NewMessageForm: FC = () => {
  const dispatch = useDispatch();

  const submit = (values: any) => {
    dispatch(actionsDialogs.sendNewMessage(values.message));
    values.message = "";
  };

  return (
    <div className={module.newMessage}>
      <Formik
        enableReinitialize
        initialValues={{
          message: "",
        }}
        onSubmit={submit}
      >
        {() => (
          <Form>
            <Field
              as="textarea"
              placeholder="Enter your message"
              name="message"
              autoFocus
              cols="50"
              rows="4"
              className={module.messageTextarea}
            />
            <button type="submit" className={module.submitMessage}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
