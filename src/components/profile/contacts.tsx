import React, { FC } from "react";
import { useSelector } from "react-redux";

import { profileSelector } from "@/redux/selectors/profile.selectors";
import { ConstactsType } from "@/types/types";
import { Contact } from "@/components/profile/contact";
import module from "@/components/profile/profile-about.module.css";

export const Contacts: FC = () => {
  const profile = useSelector(profileSelector);

  delete profile?.contacts.facebook;
  const profileObject = delete profile?.contacts.instagram;
  const values = Object.values(profileObject || {}).filter(Boolean);

  return (
    <div className={module.contactsWrapper}>
      {values.length > 0 && (
        <p className={module.title}>
          <b>Contacts: </b>
        </p>
      )}
      <ul className={module.contacts}>
        {profile &&
          Object.keys(profile.contacts).map((key) => {
            return (
              <Contact
                key={key}
                contactTitle={key}
                contactValue={
                  profile.contacts[key as keyof ConstactsType] || ""
                }
              />
            );
          })}
      </ul>
    </div>
  );
};
