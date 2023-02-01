import React, { FC } from "react";
import module from "./ProfileAbout.module.css";
import { AboutMe } from "./AboutMe/AboutMe";
import { Contacts } from "./Contacts/Contacts";
import { ProfileStatus } from "./ProfileStatus/ProfileStatus";
import { useSelector } from "react-redux";
import { profileSelector } from "src/redux/selectors/profileSelectors";

type PropsTypes = {
    isOwner: boolean;
  goToEditMode: () => void;
};

export const ProfileAbout: FC<PropsTypes> = ({
  goToEditMode,
  isOwner,
}) => {
  const profile = useSelector(profileSelector);

  return (
    <div className={module.description}>
      <div>
        <h2 className={module.heading}>{profile?.fullName}</h2>
        <ProfileStatus />
        <AboutMe />
        <Contacts  />
      </div>
      {isOwner && (
        <div>
          <button className={module.editBtn} onClick={goToEditMode}>
            Edit profile
          </button>
        </div>
      )}
    </div>
  );
};
