import React from 'react';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';

function App(props) {
  const state = props.store.getState();
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar dialogsPage={state.dialogsPage} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/profile' element={<Profile store={props.store} />} />
          <Route path='/dialogs/*' element={<Dialogs store={props.store} />} />
          {/* <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
