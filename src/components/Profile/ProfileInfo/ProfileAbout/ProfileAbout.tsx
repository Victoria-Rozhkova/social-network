import React, { FC } from "react";
import module from "./ProfileAbout.module.css";
import { AboutMe } from "./AboutMe/AboutMe";
import { Contacts } from "./Contacts/Contacts";
import { ProfileStatus } from "./ProfileStatus/ProfileStatus";
import { ProfileType } from "src/types/types";

type PropsTypes = {
  profile: ProfileType;
  status: string;
  isOwner: boolean;
  goToEditMode: () => void;
  updateStatus: (status: string) => void;
};

export const ProfileAbout: FC<PropsTypes> = ({
  profile,
  status,
  updateStatus,
  goToEditMode,
  isOwner,
}) => {
  return (
    <div className={module.description}>
      <div>
        {" "}
        <h2 className={module.heading}>{profile.fullName}</h2>
        <ProfileStatus status={status} updateStatus={updateStatus} />
        <AboutMe profile={profile} />
        <Contacts profile={profile} />
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
