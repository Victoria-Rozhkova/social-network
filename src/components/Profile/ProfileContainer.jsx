import React from "react";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import { getProfile } from "../../redux/profileReduser";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const ProfileAPI = (props) => {
  const { id } = useParams();
  useEffect(() => {
    if (!id === undefined) {
      props.getProfile(id);
    }
    else {
      props.getProfile(props.userId);
    }
  }, [id]);
  return <Profile profile={props.profile} />;
};

const authRedirectComponent = withAuthRedirect(ProfileAPI);

const MapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    userId: state.auth.userId,
  };
};

const ProfileContainer = connect(MapStateToProps, {
  getProfile
})(authRedirectComponent);
export default ProfileContainer;