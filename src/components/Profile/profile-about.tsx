import React, { FC } from "react";
import { useSelector } from "react-redux";

import { profileSelector } from "@/redux/selectors/profile.selectors";
import { AboutMe } from "@/components/Profile/about-me";
import { Contacts } from "@/components/Profile/contacts";
import { ProfileStatus } from "@/components/Profile/profile-status";
import module from "@/components/Profile/profile-about.module.css";

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
        <ProfileStatus isOwner={isOwner} />
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
