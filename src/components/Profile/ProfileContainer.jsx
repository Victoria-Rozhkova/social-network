import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import { setUserProfile } from "../../redux/profileReduser";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProfileAPI = (props) => {
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
      .then(response => {
        props.setUserProfile(response.data);
      });
  }, []);
  return <Profile profile={props.profile} />;
};
// class ProfileAPI extends React.Component {
//   componentDidMount() {
//     // this.props.toggleIsLoading(true);
//     console.log(this.props.id);
//     axios.get(`http://localhost:3004/profile/${this.props.id}`)
//       .then(response => {
//         const arr = response.data;
//         this.props.setUserProfile(arr[0]);
//       });
//   }
//   render() {
//     return <Profile profile={this.props.profile} />;
//   }
// }

const MapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  };
};

const ProfileContainer = connect(MapStateToProps, {
  setUserProfile
})(ProfileAPI);
export default ProfileContainer;