import React from 'react';
import axios from 'axios';
import { Header } from './Header';
import { connect } from 'react-redux';
import { setAuthUser } from '../../redux/authReduser';

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    }).then(response => {
      if (response.data.resultCode === 0) {
        console.log(response);
        const { id, login, email } = response.data.data;
        debugger;
        this.props.setAuthUser(id, login, email);
      }
      // this.props.toggleIsLoading(false);
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
export default connect(MapStateToProps, { setAuthUser })(HeaderContainer);;