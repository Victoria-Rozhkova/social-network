import React from "react";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import { getProfile } from "../../redux/profileReduser";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ProfileAPI = (props) => {
  const { id } = useParams();
  useEffect(() => {
    props.getProfile(id);
  });
  if (props.isAuth === false || props.profile === null) {
    return <Navigate to="/login" />;
  }
  return <Profile profile={props.profile} />;

};

const MapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  };
};

const ProfileContainer = connect(MapStateToProps, {
  getProfile
})(ProfileAPI);
export default ProfileContainer;