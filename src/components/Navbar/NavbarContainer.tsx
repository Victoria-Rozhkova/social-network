import { connect } from "react-redux";
import { dialogsSelector } from "src/redux/selectors/dialogsSelectors";
import { AppStateType } from "src/redux/store-redux";
import { Navbar } from "./Navbar";

const MapStateToProps = (state: AppStateType) => {
  return {
    friends: dialogsSelector(state),
  };
};

const NavbarContainer = connect(MapStateToProps, {})(Navbar);
export default NavbarContainer;
