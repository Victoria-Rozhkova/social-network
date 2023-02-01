import React, { FC } from "react";
import { useSelector } from "react-redux";
import { profileSelector } from "src/redux/selectors/profileSelectors";
import { ConstactsType } from "src/types/types";
import module from "../ProfileAbout.module.css";
import { Contact } from "./Contact";

export const Contacts: FC = () => {
  const profile = useSelector(profileSelector);

  return (
    <div className={module.contactsWrapper}>
      <p className={module.title}>
        <b>Contacts: </b>
      </p>
      <ul className={module.contacts}>
        {profile &&
          Object.keys(profile.contacts).map((key) => {
            return (
              <Contact
                key={key}
                contactTitle={key}
                contactValue={profile.contacts[key as keyof ConstactsType]}
              />
            );
          })}
      </ul>
    </div>
  );
};
