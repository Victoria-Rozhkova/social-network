import React from 'react';
import { Header } from './Header';
import { connect } from 'react-redux';
import { setAuthUser } from '../../redux/authReduser';
import { toggleIsLoading } from '../../redux/usersReduser';
import { UsersAxios } from '../../api/api';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsLoading(true);
    UsersAxios.getAuthUser().then(data => {
      const { id, login, email } = data.data;
      this.props.setAuthUser(id, login, email);
      this.props.toggleIsLoading(false);
    });
  }
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
export default connect(MapStateToProps, { setAuthUser, toggleIsLoading })(HeaderContainer);;