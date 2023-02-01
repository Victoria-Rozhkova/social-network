import React, { FC } from "react";
import { useSelector } from "react-redux";
import { profileSelector } from "src/redux/selectors/profileSelectors";
import module from "../ProfileAbout.module.css";

export const AboutMe: FC = () => {
  const profile = useSelector(profileSelector);

  return (
    <div className={module.aboutMe}>
      <p className={module.text}>
        <b>Looking for a job: </b>
        {profile?.lookingForAJob ? "yes" : "no"}
      </p>
      {profile?.lookingForAJob && (
        <p className={module.text}>
          <b>My professional skills: </b>
          {profile?.lookingForAJobDescription}
        </p>
      )}
      <p className={module.text}>
        <b>About me: </b>
        {profile?.aboutMe}
      </p>
    </div>
  );
};
