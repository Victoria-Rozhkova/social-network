import React from "react";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import { setUserProfile } from "../../redux/profileReduser";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProfileAxios } from "../../api/api";
import { toggleIsLoading } from "../../redux/usersReduser";

const ProfileAPI = (props) => {
  const { id } = useParams();
  props.toggleIsLoading(true);
  useEffect(() => {
    ProfileAxios.getProfiles(id).then(data => {
      props.setUserProfile(data);
      props.toggleIsLoading(false);
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
  setUserProfile,
  toggleIsLoading
})(ProfileAPI);
export default ProfileContainer;