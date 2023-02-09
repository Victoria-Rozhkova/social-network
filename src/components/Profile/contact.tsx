import React, { FC } from "react";

import module from "@/components/Profile/profile-about.module.css";

type PropsTypes = {
  contactTitle: string;
  contactValue: string | null;
};

export const Contact: FC<PropsTypes> = ({ contactTitle, contactValue }) => {
  return (
    <li>
      {" "}
      {contactTitle}:{" "}
      {contactValue === null || contactValue === "" ? (
        <span className={module.noContacts}>not stated</span>
      ) : (
        <a href={contactValue}>{contactValue}</a>
      )}{" "}
    </li>
  );
};
