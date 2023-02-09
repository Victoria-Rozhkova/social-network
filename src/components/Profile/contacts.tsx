import React, { FC } from "react";
import { useSelector } from "react-redux";

import { profileSelector } from "@/redux/selectors/profile.selectors";
import { ConstactsType } from "@/types/types";
import { Contact } from "@/components/Profile/contact";
import module from "@/components/Profile/profile-about.module.css";

export const Contacts: FC = () => {
  const profile = useSelector(profileSelector);
  const values = Object.values(profile?.contacts || {}).filter(Boolean);

  return (
    <div className={module.contactsWrapper}>
      {values.length > 0 && (
        <p className={module.title}>
          <b>Contacts: </b>
        </p>
      )}
      <ul className={module.contacts}>
        {profile &&
          Object.keys(profile.contacts)
            .filter((el) => el !== "facebook" && el !== "instagram")
            .map((key) => {
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
