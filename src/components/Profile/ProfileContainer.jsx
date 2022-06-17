import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import { setUserProfile } from "../../redux/profileReduser";

class ProfileAPI extends React.Component {
  componentDidMount() {
    // this.props.toggleIsLoading(true);
    axios.get(`http://localhost:3004/profile?userId=2`)
      .then(response => {
        const arr = response.data;
        this.props.setUserProfile(arr[0]);
      });
  }
  render() {
    return <Profile profile={this.props.profile} />;
  }
}

const MapStateToProps = (state) => {
  // console.log((state.profilePage.profile));
  return {
    profile: state.profilePage.profile
  };
};

const ProfileContainer = connect(MapStateToProps, {
  setUserProfile
})(ProfileAPI);
export default ProfileContainer;