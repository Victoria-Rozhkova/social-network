import React from 'react';
import { Header } from './Header';
import { connect } from 'react-redux';
import { getAuthUser, logout } from '../../redux/authReduser';

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
};

const MapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};
export default connect(MapStateToProps, { getAuthUser, logout })(HeaderContainer);;