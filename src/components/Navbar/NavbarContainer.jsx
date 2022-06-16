import { connect } from 'react-redux';
import { Navbar } from './Navbar';

const MapStateToProps = (state) => {
  return {
    friends: state.dialogsPage.dialogs,
  };
};

const NavbarContainer = connect(MapStateToProps, {})(Navbar);
export default NavbarContainer;