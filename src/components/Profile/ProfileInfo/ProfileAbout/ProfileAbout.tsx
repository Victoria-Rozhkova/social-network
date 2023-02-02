import React, { FC } from "react";
import { useSelector } from "react-redux";

import { profileSelector } from "@/redux/selectors/profileSelectors";
import { AboutMe } from "@/components/Profile/ProfileInfo/ProfileAbout/AboutMe/AboutMe";
import { Contacts } from "@/components/Profile/ProfileInfo/ProfileAbout/Contacts/Contacts";
import { ProfileStatus } from "@/components/Profile/ProfileInfo/ProfileAbout/ProfileStatus/ProfileStatus";
import module from "@/components/Profile/ProfileInfo/ProfileAbout/ProfileAbout.module.css";

type PropsTypes = {
  isOwner: boolean;
  goToEditMode: () => void;
};

export const ProfileAbout: FC<PropsTypes> = ({ goToEditMode, isOwner }) => {
  const profile = useSelector(profileSelector);

  return (
    <div className={module.description}>
      <div>
        <h2 className={module.heading}>{profile?.fullName}</h2>
        <ProfileStatus />
        <AboutMe />
        <Contacts />
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
