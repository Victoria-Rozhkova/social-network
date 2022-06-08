import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Profile } from './components/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <NavbarContainer />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          {/* <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
