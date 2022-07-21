import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { NotFound } from "./components/NotFound/NotFound";
import HeaderContainer from "./components/Header/HeaderContainer";
import { LoginContainer } from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { initializeApp } from "./redux/appReduser";
import { Preloader } from "./components/common/Preloader/Preloader";
import { compose } from "redux";
import store from "./redux/store-redux";

function App(props) {
  useEffect(() => props.initializeApp());
  if (!props.initialization) {
    return <Preloader />;
  }
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <NavbarContainer />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfileContainer />} />
          <Route path="/users/profile/:id" element={<ProfileContainer />} />
          <Route path="/dialogs/" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<LoginContainer />} />
          {/* <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} /> */}
        </Routes>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  initialization: state.app.initialization,
});

const AppMain = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const AppContainer = compose(connect(mapStateToProps, { initializeApp }))(App);

export default AppMain;
