import React, { FC } from "react";
import { ConstactsType, ProfileType } from "src/types/types";
import module from "../ProfileAbout.module.css";
import { Contact } from "./Contact";

type PropsTypes = {
  profile: ProfileType;
};

export const Contacts: FC<PropsTypes> = ({ profile }) => {
  return (
    <div className={module.contactsWrapper}>
      <p className={module.title}>
        <b>Contacts: </b>{" "}
      </p>
      <ul className={module.contacts}>
        {Object.keys(profile.contacts).map((key) => {
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
