import React from 'react';
import module from '../Navbar.module.css';

export const Friends = (props) => {
  return (
    <nav >
      <div className={module.friendsBlock}>
        <h2>Friends</h2>
        <div className={module.friends}>
          {props.friends.map((el) => {
            return (
              <div key={el.id} className={module.friend}>
                <img src={el.img} alt="img" />
                {el.name}
              </div>);
          })}
        </div>
      </div>
    </nav>
  );
};