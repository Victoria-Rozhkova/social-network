import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import state, { subscribe, updateTextMessage, updateTextPost, writeNewMessage } from './redux/state';
import { addPost } from './redux/state';

const renderUI = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updateTextPost={updateTextPost} updateTextMessage={updateTextMessage} writeNewMessage={writeNewMessage} />
      </BrowserRouter>
    </React.StrictMode>
  );
};

renderUI(state);
subscribe(renderUI);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App state={state} addPost={addPost} />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
