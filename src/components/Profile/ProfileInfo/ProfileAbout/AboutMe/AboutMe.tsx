import React, { FC } from "react";
import { ProfileType } from "src/types/types";
import module from "../ProfileAbout.module.css";

type PropsTypes = {
  profile: ProfileType;
};

export const AboutMe: FC<PropsTypes> = ({ profile }) => {
  return (
    <div className={module.aboutMe}>
      <p className={module.text}>
        <b>Looking for a job: </b>
        {profile.lookingForAJob ? "yes" : "no"}
      </p>
      {profile.lookingForAJob && (
        <p className={module.text}>
          <b>My professional skills: </b>
          {profile.lookingForAJobDescription}
        </p>
      )}
      <p className={module.text}>
        <b>About me: </b>
        {profile.aboutMe}
      </p>
    </div>
  );
};
