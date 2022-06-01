import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const dialogs = [
  { id: 1, name: 'Ann', },
  { id: 2, name: 'Sam', },
  { id: 3, name: 'John', },
];

const messages = [
  { id: 1, message: 'Hi' },
  { id: 1, message: 'How are you?' },
];

const posts = [
  { id: 1, post: 'Hey from props' },
  { id: 2, post: 'Hello from map' },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={posts} dialogs={dialogs} messages={messages} />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
