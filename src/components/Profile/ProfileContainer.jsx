import React from "react";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import { getProfile } from "../../redux/profileReduser";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const ProfileAPI = (props) => {
  const { id } = useParams();
  useEffect(() => {
    if (Number(id)) {
      props.getProfile(id);
    }
    if (id === undefined || id === null) {
      props.getProfile(props.userId);
      return;
    }
  }, [id]);
  return <Profile profile={props.profile} />;
};

const MapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    userId: state.auth.userId,
  };
};

const ProfileContainer = compose(connect(MapStateToProps, {
  getProfile
}), withAuthRedirect)(ProfileAPI);

export default ProfileContainer;