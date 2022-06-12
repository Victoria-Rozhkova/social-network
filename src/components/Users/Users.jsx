import React from 'react';
import module from './Users.module.css';

export const Users = (props) => {
  return (
    <div className={module.users}>
      {props.users.map(user => <div key={user.id} className={module.user}>
        <div>
          <img src={user.photoUrl} alt="phot" />
        </div>
        <div className={module.userInfo}>
          <div className={module.userLeft}>
            <div className={module.userName}> {user.fullName}</div>
            <div className={module.userStatus}>{user.status}</div>
          </div>
          <div className={module.userRight}>
            <div className={module.userCountry}>{user.location.country} </div>
            <div className={module.userCity}>{user.location.city}</div>
          </div>
        </div>
      </div>)
      }</div>
  );
};