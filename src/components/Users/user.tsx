import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { UserType } from "@/types/types";
import userPhoto from "@/assets/images/user.png";
import module from "@/components/Users/users.module.css";
import { isAuthSelector } from "@/redux/selectors/auth.selectors";
import { followingInProgressSelector } from "@/redux/selectors/users.selectors";
import { follow, unfollow } from "@/redux/users.reducer";

type PropsType = {
  user: UserType;
};

export const User: FC<PropsType> = ({ user }) => {
  const isAuth = useSelector(isAuthSelector);
  const followingInProgress = useSelector(followingInProgressSelector);

  const dispatch = useDispatch();

  return (
    <div className={module.user}>
      <div className={module.userFollow}>
        <NavLink to={`profile/${user.id}`}>
          <img
            src={user.photos.small != null ? user.photos.small : userPhoto}
            alt="img"
          />
        </NavLink>
        {user.followed === true ? (
          <button
            disabled={
              !isAuth || followingInProgress.some((id) => id === user.id)
            }
            onClick={() => {
              dispatch(unfollow(user.id) as any);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={
              !isAuth || followingInProgress.some((id) => id === user.id)
            }
            onClick={() => {
              dispatch(follow(user.id) as any);
            }}
          >
            Follow
          </button>
        )}
      </div>
      <div className={module.userInfo}>
        <div className={module.userLeft}>
          <div className={module.userName}>
            <NavLink to={`profile/${user.id}`}>{user.name}</NavLink>
          </div>
          <div className={module.userStatus}>{user.status || "no status"}</div>
        </div>
        <div className={module.userRight}>
          <div className={module.userCountry}>{"user.location.country"} </div>
          <div className={module.userCity}>{"user.location.city"}</div>
        </div>
      </div>
    </div>
  );
};
