import React, { FC } from "react";

import img from "@/assets/images/post.png";
import like from "@/assets/images/like.png";
import module from "@/components/Profile/MyPosts/post.module.css";

type PropsType = {
  post: string;
  likesCount: number;
};

export const Post: FC<PropsType> = ({ post, likesCount }) => {
  return (
    <div className={module.posts}>
      <div className={module.post}>
        <img className={module.postAvatar} src={img} alt="avatar" />
        <p>{post}</p>
        <button className={module.likeBtn}>
          <img src={like} alt="" />
        </button>
        {likesCount}
      </div>
    </div>
  );
};
