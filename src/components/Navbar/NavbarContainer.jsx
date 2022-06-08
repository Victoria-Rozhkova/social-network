import { connect } from 'react-redux';
import { Navbar } from './Navbar';

const MapStateToProps = (state) => {
  return {
    friends: state.dialogsPage.dialogs,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {};
};

const NavbarContainer = connect(MapStateToProps, MapDispatchToProps)(Navbar);
export default NavbarContainer;