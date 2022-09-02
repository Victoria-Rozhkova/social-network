import { connect } from 'react-redux';
import { dialogsSelector } from 'src/redux/selectors/dialogsSelectors';
import { Navbar } from './Navbar';

const MapStateToProps = (state) => {
  return {
    friends: dialogsSelector(state),
  };
};

const NavbarContainer = connect(MapStateToProps, {})(Navbar);
export default NavbarContainer;