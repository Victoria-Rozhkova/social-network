import React, { FC } from "react";

import Icon from "@/components/UI/Icon/icon";
import { IconName } from "@/components/UI/Icon/icons.type";
import module from "@/components/Profile/profile-about.module.css";

type PropsTypes = {
  contactTitle: string;
  contactValue: string | null;
};

type Icons = Record<string, IconName>;

const icons: Icons = {
  twitter: "Twitter",
  github: "Github",
  youtube: "Youtube",
  vk: "Vk",
  mainLink: "Linkedin",
  website: "Website",
};

export const Contact: FC<PropsTypes> = ({ contactTitle, contactValue }) => {
  return (
    <>
      {contactValue !== null && contactValue !== "" && (
        <li className={module.contact}>
          <a title={contactTitle} href={contactValue || ""}>
            <Icon
              size={32}
              name={icons[icons[contactTitle] ? contactTitle : "website"]}
              className={module.icon}
            />
          </a>
        </li>
      )}
    </>
  );
};
