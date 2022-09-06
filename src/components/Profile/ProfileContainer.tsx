import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Profile } from "./Profile";
import {
  getProfile,
  getStatus,
  savePhoto,
  updateProfile,
  updateStatus,
} from "../../redux/profileReduser";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  profileSelector,
  statusSelector,
} from "src/redux/selectors/profileSelectors";
import {
  isAuthSelector,
  userIdSelector,
} from "src/redux/selectors/authSelectors";
import { AppStateType } from "src/redux/store-redux";
import { ProfileType } from "src/types/types";

type PropsType = {
  getProfile: (id: number | null) => void;
  getStatus: (id: number | null) => void;
  updateStatus: () => void;
  savePhoto: () => void;
  updateProfile: (profile: ProfileType) => Promise<any>;
};
type MapStateType = ReturnType<typeof MapStateToProps>;

const ProfileAPI: FC<
  PropsType & MapStateType
> = ({
  getProfile,
  getStatus,
  userId,
  profile,
  status,
  updateStatus,
  isAuth,
  savePhoto,
  updateProfile,
}) => {
  const [isOwner, setIsOwner] = useState(false);
  const { id } = useParams() ;
  useEffect(() => {
    if (Number(id)) {
      getProfile(id as unknown as number| null);
      getStatus(id as unknown as number | null);
      setIsOwner(false);
    }
    if (id === undefined || id === null) {
      getProfile(userId);
      getStatus(userId);
      setIsOwner(true);
      return;
    }
  }, [id]);

  return (
    <Profile
      profile={profile}
      status={status}
      updateStatus={updateStatus}
      isAuth={isAuth}
      isOwner={isOwner}
      savePhoto={savePhoto}
      updateProfile={updateProfile}
    />
  );
};

const MapStateToProps = (state: AppStateType) => {
  return {
    profile: profileSelector(state),
    userId: userIdSelector(state),
    status: statusSelector(state),
    isAuth: isAuthSelector(state),
  };
};

const ProfileContainer = compose<React.ComponentType>(
  connect(MapStateToProps, {
    getProfile,
    getStatus,
    updateStatus,
    savePhoto,
    updateProfile,
  }),
  withAuthRedirect
)(ProfileAPI);

export default ProfileContainer;
