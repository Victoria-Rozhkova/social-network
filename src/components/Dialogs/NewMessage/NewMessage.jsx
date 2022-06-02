import React, { useRef } from 'react';
import module from '../Dialogs.module.css';

export const NewMessage = (props) => {

  const ref = useRef();

  const writeMessage = () => {
    const text = ref.current.value;
    console.log(text);
    alert(text);
  };

  return (
    <div className={module.newMessage}>
      <textarea ref={ref} cols="30" rows="4">
      </textarea>
      <button onClick={writeMessage} className={module.submitMessage}>Отправить</button>
    </div>
  );
};