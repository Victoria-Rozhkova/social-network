import React from 'react';
import module from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

export const Users = (props) => {
  let pagesCount = Math.ceil(props.totalPageCount / props.pages);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={module.users}>
        {props.users.map(user => <div key={user.id} className={module.user}>
          <div className={module.userFollow}>
            <NavLink to={`profile/${user.id}`}><img src={user.photos.small != null ? user.photos.small : userPhoto} alt="img" /></NavLink>
            {user.followed === true
              ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => { props.unfollow(user.id); }}>Unfollow</button>
              : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => { props.follow(user.id); }}>Follow</button>}
          </div>
          <div className={module.userInfo}>
            <div className={module.userLeft}>
              <div className={module.userName}>
                <NavLink to={`profile/${user.id}`}>{user.name}</NavLink></div>
              <div className={module.userStatus}>{user.status}</div>
            </div>
            <div className={module.userRight}>
              <div className={module.userCountry}>{'user.location.country'} </div>
              <div className={module.userCity}>{'user.location.city'}</div>
            </div>
          </div>
        </div>)
        }</div >
      <div className={module.pagination}>
        {pages.map((page, index) => {
          return <button key={index} className={props.currentPage === page
            ? module.currentPage : module.pageBtn}
            onClick={() => { props.onPageChange(page); }}>{page}</button>;
        })}
      </div>
    </div>
  );
};