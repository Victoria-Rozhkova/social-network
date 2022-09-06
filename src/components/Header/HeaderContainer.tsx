import React from "react";
import { Header } from "./Header";
import { connect } from "react-redux";
import { logout } from "../../redux/authReduser";
import {
  isAuthSelector,
  loginSelector,
} from "src/redux/selectors/authSelectors";
import { AppStateType } from "src/redux/store-redux";

type MapStatePropsTypes = {
  isAuth: boolean;
  login: string | null;
};
type MapDispatchPropsTypes = {
  logout: () => void;
};

class HeaderContainer extends React.Component<
  MapStatePropsTypes & MapDispatchPropsTypes
> {
  render() {
    return <Header {...this.props} />;
  }
}

const MapStateToProps = (state: AppStateType) => {
  return {
    isAuth: isAuthSelector(state),
    login: loginSelector(state),
  };
};
export default connect(MapStateToProps, { logout })(HeaderContainer);
