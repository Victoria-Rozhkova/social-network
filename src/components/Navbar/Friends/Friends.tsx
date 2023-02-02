import React, { FC } from "react";
import { useSelector } from "react-redux";

import { dialogsSelector } from "@/redux/selectors/dialogsSelectors";
import module from "@/components/Navbar/Navbar.module.css";

export const Friends: FC = () => {
  const friends = useSelector(dialogsSelector);

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
