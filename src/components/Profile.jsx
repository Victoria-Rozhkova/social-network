import React from 'react';
import module from './Profile.module.css';

export const Profile = () => {
  return (
    <div className={module.content}>
      <div>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt="img" />
      </div>
      <div>
        <img src="http://placeimg.com/200/200/animals" alt="avatar" />
        <p>descr</p>
      </div>
      <div>
        <div>
          my post
        </div>
        <div>
          new posts
        </div>
        <div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </div>
  );
};