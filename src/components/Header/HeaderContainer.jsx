import React from 'react';
import { Header } from './Header';
import { connect } from 'react-redux';
import { getAuthUser, logout } from '../../redux/authReduser.ts';
import { isAuthSelector, loginSelector } from 'src/redux/selectors/authSelectors';

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
};

const MapStateToProps = (state) => {
  return {
    isAuth: isAuthSelector(state),
    login: loginSelector(state),
  };
};
export default connect(MapStateToProps, { getAuthUser, logout })(HeaderContainer);;