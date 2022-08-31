import React from 'react';
import module from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

export const User = ({ user, followingInProgress, unfollow, follow, isAuth }) => {
  return (
    <div className={module.user}>
      <div className={module.userFollow}>
        <NavLink to={`profile/${user.id}`}><img src={user.photos.small != null ? user.photos.small : userPhoto} alt="img" /></NavLink>
        {user.followed === true
          ? <button disabled={!isAuth || followingInProgress.some(id => id === user.id)} onClick={() => { unfollow(user.id); }}>Unfollow</button>
          : <button disabled={!isAuth || followingInProgress.some(id => id === user.id)} onClick={() => { follow(user.id); }}>Follow</button>}
      </div>
      <div className={module.userInfo}>
        <div className={module.userLeft}>
          <div className={module.userName}>
            <NavLink to={`profile/${user.id}`}>{user.name}</NavLink></div>
          <div className={module.userStatus}>{user.status || "no status"}</div>
        </div>
        <div className={module.userRight}>
          <div className={module.userCountry}>{'user.location.country'} </div>
          <div className={module.userCity}>{'user.location.city'}</div>
        </div>
      </div>
    </div>);
};