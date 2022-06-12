import React from 'react';
import module from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

export const Users = (props) => {
  if (props.users.length === 0) {
    axios.get('https://raw.githubusercontent.com/Victoria-Rozhkova/social-network/API/users.json')
      .then(response => { props.setUsers(response.data.items); });
  }
  return (
    <div className={module.users}>
      {props.users.map(user => <div key={user.id} className={module.user}>
        <div>
          <a href="#">
            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="photo" />
          </a>
        </div>
        <div className={module.userInfo}>
          <div className={module.userLeft}>
            <div className={module.userName}> <a href="#">{user.name}</a></div>
            <div className={module.userStatus}>{user.status}</div>
          </div>
          <div className={module.userRight}>
            <div className={module.userCountry}>{'user.location.country'} </div>
            <div className={module.userCity}>{'user.location.city'}</div>
          </div>
        </div>
      </div>)
      }</div>
  );
};