import React from "react";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import { getProfile, getStatus, savePhoto, updateProfile, updateStatus } from "../../redux/profileReduser.ts";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { useState } from "react";
import { profileSelector, statusSelector } from "src/redux/selectors/profileSelectors";
import { isAuthSelector, userIdSelector } from "src/redux/selectors/authSelectors";

const ProfileAPI = ({ getProfile, getStatus, userId, profile, status, updateStatus, isAuth, savePhoto, updateProfile }) => {
  const [isOwner, setIsOwner] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    if (Number(id)) {
      getProfile(id);
      getStatus(id);
      setIsOwner(false);
    }
    if (id === undefined || id === null) {
      getProfile(userId);
      getStatus(userId);
      setIsOwner(true);
      return;
    }
  }, [id]);

  return <Profile profile={profile} status={status} updateStatus={updateStatus} isAuth={isAuth} isOwner={isOwner} savePhoto={savePhoto} updateProfile={updateProfile} />;
};

const MapStateToProps = (state) => {
  return {
    profile: profileSelector(state),
    userId: userIdSelector(state),
    status: statusSelector(state),
    isAuth: isAuthSelector(state),
  };
};

const ProfileContainer = compose(connect(MapStateToProps, {
  getProfile,
  getStatus,
  updateStatus,
  savePhoto,
  updateProfile,
}), withAuthRedirect)(ProfileAPI);

export default ProfileContainer;