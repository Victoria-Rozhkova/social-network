import React, { useRef } from 'react';
import { updateTextMessageActionCreator, writeNewMessageActionCreator } from '../../../redux/state';
import module from '../Dialogs.module.css';

export const NewMessage = (props) => {

  const ref = useRef();

  const writeNewMessage = () => {
    props.dispatch(writeNewMessageActionCreator());
  };

  const onChangeTextMessage = () => {
    const message = ref.current.value;
    props.dispatch(updateTextMessageActionCreator(message));
  };

  //Фокус в конец textarea
  const moveCaretAtEnd = (e) => {
    const temp_value = e.target.value;
    e.target.value = '';
    e.target.value = temp_value;
  };

  return (
    <div className={module.newMessage}>
      <textarea autoFocus onFocus={moveCaretAtEnd} ref={ref} onChange={onChangeTextMessage} cols="30" rows="4" value={props.newMessage} />
      <button onClick={writeNewMessage} className={module.submitMessage}>Отправить</button>
    </div>
  );
};