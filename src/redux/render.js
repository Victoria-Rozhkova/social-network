import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import { addPost, updateTextMessage, updateTextPost, writeNewMessage } from "./state";


export const renderUI = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updateTextPost={updateTextPost} updateTextMessage={updateTextMessage} writeNewMessage={writeNewMessage} />
      </BrowserRouter>
    </React.StrictMode>
  );
};
