import React from "react";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import { getProfile, getStatus, updateStatus } from "../../redux/profileReduser";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const ProfileAPI = ({ getProfile, getStatus, userId, profile, status, updateStatus, isAuth }) => {
  const { id } = useParams();
  useEffect(() => {
    if (Number(id)) {
      getProfile(id);
      getStatus(id);
    }
    if (id === undefined || id === null) {
      getProfile(userId);
      getStatus(userId);
      return;
    }
  }, [id]);

  return <Profile profile={profile} status={status} updateStatus={updateStatus} isAuth={isAuth} />;
};

const MapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    userId: state.auth.userId,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth
  };
};

const ProfileContainer = compose(connect(MapStateToProps, {
  getProfile,
  getStatus,
  updateStatus
}), withAuthRedirect)(ProfileAPI);

export default ProfileContainer;