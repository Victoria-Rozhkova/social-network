import React from 'react';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/profile' element={<Profile posts={props.posts} />} />
          <Route path='/dialogs/*' element={<Dialogs dialogs={props.dialogs} messages={props.messages} />} />
          {/* <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
