import React, { Suspense, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { connect, Provider } from "react-redux";
import { initializeApp } from "./redux/appReduser";
import { Preloader } from "./components/common/Preloader/Preloader";
import { compose } from "redux";
import store, { AppStateType } from "./redux/store-redux";
import { LoginContainer } from "./components/Login/Login";

const DialogsContainer = React.lazy(
  () => import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(
  () => import("./components/Profile/ProfileContainer")
);
const UsersContainer = React.lazy(
  () => import("./components/Users/UsersContainer")
);
// const LoginContainer = lazy(() => import("./components/Login/Login"));
const NotFound = React.lazy(() => import("./components/NotFound/NotFound"));

type MapStatePropsTypes = ReturnType<typeof mapStateToProps>;
type MapDispatchPropsTypes = { initializeApp: () => void };

function App(props: MapStatePropsTypes & MapDispatchPropsTypes) {
  useEffect(() => props.initializeApp());
  if (!props.initialization) {
    return <Preloader />;
  }
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <NavbarContainer />
      <div className="app-wrapper-content">
        <Suspense fallback={<Preloader />}>
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
        </Suspense>
      </div>
    </div>
  );
}

const mapStateToProps = (state: AppStateType) => ({
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

const AppContainer = compose<React.ComponentType>(
  connect(mapStateToProps, { initializeApp })
)(App);

export default AppMain;
