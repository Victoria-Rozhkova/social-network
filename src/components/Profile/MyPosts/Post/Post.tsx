import React, { FC } from "react";
import module from "./Post.module.css";
import img from "./post.png";
import like from "../../../../img/like.png";

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
