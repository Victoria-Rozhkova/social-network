import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { connect, Provider } from "react-redux";
import { compose } from "redux";

import { initializeApp } from "@/redux/appReduser";
import { Preloader } from "@/components/common/Preloader/preloader-";
import store, { AppStateType } from "@/redux/store-redux";
import { LayoutApp } from "@/components/Layout/Layout";
import "antd/dist/antd.css";
import "./App.css";

type MapStatePropsTypes = ReturnType<typeof mapStateToProps>;
type MapDispatchPropsTypes = { initializeApp: () => void };

function App(props: MapStatePropsTypes & MapDispatchPropsTypes) {
  useEffect(() => props.initializeApp());
  if (!props.initialization) {
    return <Preloader />;
  }
  return (
    // <div className="app-wrapper">
    <LayoutApp />
    // </div>
  );
}

const mapStateToProps = (state: AppStateType) => ({
  initialization: state.app.initialization,
});

const AppMain = () => {
  return (
    //  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
    // </React.StrictMode>
  );
};

const AppContainer = compose<React.ComponentType>(
  connect(mapStateToProps, { initializeApp })
)(App);

export default AppMain;
