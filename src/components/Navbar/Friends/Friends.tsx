import React, { FC } from "react";
import { DialogType } from "src/redux/dialogsReduser";
import module from "../Navbar.module.css";

type PropsTypes = {
  friends: Array<DialogType>;
};

export const Friends: FC<PropsTypes> = ({ friends }) => {
  return (
    <nav>
      <div className={module.friendsBlock}>
        <h2>Friends</h2>
        <div className={module.friends}>
          {friends.map((el) => {
            return (
              <div key={el.id} className={module.friend}>
                <img src={el.img} alt="img" />
                {el.name}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
