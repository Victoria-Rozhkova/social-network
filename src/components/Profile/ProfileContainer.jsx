import React from "react";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import { getProfile, getStatus, updateStatus } from "../../redux/profileReduser";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const ProfileAPI = (props) => {
  const { id } = useParams();
  useEffect(() => {
    if (Number(id)) {
      props.getProfile(id);
      props.getStatus(id);
    }
    if (id === undefined || id === null) {
      props.getProfile(props.userId);
      props.getStatus(props.userId);
      return;
    }
  }, [id]);
  return <Profile profile={props.profile} status={props.status} updateStatus={props.updateStatus} isAuth={props.isAuth} />;
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