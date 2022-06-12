import React from 'react';
import module from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {
  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/Victoria-Rozhkova/social-network/API/users.json')
      .then(response => { this.props.setUsers(response.data.items); });
  };
  render() {
    return <div className={module.users}>
      {
        this.props.users.map(user => <div key={user.id} className={module.user}>
          <div className={module.userFollow}>
            <a href="#1">
              <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="img" />
            </a>
            {user.followed === true
              ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
              : <button onClick={() => this.props.follow(user.id)}>Follow</button>}
          </div>
          <div className={module.userInfo}>
            <div className={module.userLeft}>
              <div className={module.userName}> <a href="#2">{user.name}</a></div>
              <div className={module.userStatus}>{user.status}</div>
            </div>
            <div className={module.userRight}>
              <div className={module.userCountry}>{'user.location.country'} </div>
              <div className={module.userCity}>{'user.location.city'}</div>
            </div>
          </div>
        </div>)
      }</div >;
  }
}

export default Users;

