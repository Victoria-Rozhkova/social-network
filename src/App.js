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
      <Navbar state={props.state.dialogsPage} />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/profile' element={<Profile
            profilePage={props.state.profilePage}
            addPost={props.addPost}
            updateTextPost={props.updateTextPost} />} />
          <Route path='/dialogs/*' element={<Dialogs dialogsPage={props.state.dialogsPage}
            writeNewMessage={props.writeNewMessage}
            updateTextMessage={props.updateTextMessage}
          />} />
          {/* <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
